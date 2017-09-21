package org.exampleapps.greatbig.jwt

import org.exampleapps.greatbig.domain.User
import org.exampleapps.greatbig.service.UserService
import org.aspectj.lang.ProceedingJoinPoint
import org.aspectj.lang.annotation.Around
import org.aspectj.lang.annotation.Aspect
import org.aspectj.lang.annotation.Pointcut
import org.aspectj.lang.reflect.MethodSignature
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import org.springframework.util.StringUtils
import org.springframework.web.bind.annotation.ResponseStatus
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * Aspect whose goal is to check automatically that methods
 * having a @ApiKeySecured annotation are correctly accessed
 * by users having a valid API Key (JWT).

 * A check against the user service is done to find the user
 * having the api key passed as request header/parameter.

 * If the API Key is valid the annotated method is executed,
 * otherwise the response is set with an UNAUTHORIZED status and the annotated
 * method is not executed.
 */
@Aspect
@Component
class ApiKeySecuredAspect(@Autowired val userService: UserService) {

    @Autowired
    var request: HttpServletRequest? = null

    @Pointcut(value = "execution(@org.exampleapps.greatbig.jwt.ApiKeySecured * *.*(..))")
    fun securedApiPointcut() {
    }

    @Around("securedApiPointcut()")
    @Throws(Throwable::class)
    fun aroundSecuredApiPointcut(joinPoint: ProceedingJoinPoint): Any? {
        if (request!!.method == "OPTIONS")
            return joinPoint.proceed()

        // see the ExposeResponseInterceptor class.
        val response = request!!.getAttribute(ExposeResponseInterceptor.KEY) as HttpServletResponse

        // check for needed roles
        val signature = joinPoint.signature as MethodSignature
        val method = signature.method
        val anno = method.getAnnotation(ApiKeySecured::class.java)

        val apiKey = request!!.getHeader("Authorization")?.replace("Token ", "")

        if (StringUtils.isEmpty(apiKey) && anno.mandatory) {
            LOG.info("No Authorization part of the request header/parameters, returning {}.", HttpServletResponse.SC_UNAUTHORIZED)

            issueError(response)
            return null
        }

        // find the user associated to the given api key.
        var user = userService.findByToken(apiKey ?: "")
        LOG.info("user by token: ${user?.email}")
        if (user == null && anno.mandatory) {
            LOG.info("No user with Authorization: {}, returning {}.", apiKey, HttpServletResponse.SC_UNAUTHORIZED)

            issueError(response)
            return null
        } else {
            // validate JWT
            try {
                LOG.info("Validating JWT")
                if (!userService.validToken(apiKey ?: "", user ?: User())) {
                    LOG.info("JWT invalid")
                    if (!anno.mandatory && user == null) {
                        LOG.info("No problem because not mandatory")
                        user = User()
                    } else { // error
                        LOG.info("Authorization: {} is an invalid JWT.", apiKey, HttpServletResponse.SC_UNAUTHORIZED)

                        issueError(response)
                        return null
                    }
                }
            } catch (e: Exception) {
                if (anno.mandatory) {
                    issueError(response)
                    return null
                } else
                    user = User()
            }
        }

        LOG.info("User is: ${user?.email}")
        userService.setCurrentUser(user ?: User())

        LOG.info("OK accessing resource, proceeding.")

        // execute
        try {
            val result = joinPoint.proceed()
            // remove user from thread local
            userService.clearCurrentUser()

            LOG.info("DONE accessing resource.")

            return result
        } catch (e: Throwable) {
            // check for custom exception
            val rs = e.javaClass.getAnnotation(ResponseStatus::class.java)
            if (rs != null) {
                LOG.error("ERROR accessing resource, reason: '{}', status: {}.",
                        if (StringUtils.isEmpty(e.message)) rs.reason else e.message,
                        rs.value)
            } else {
                LOG.error("ERROR accessing resource")
            }
            throw e
        }

    }

    private fun issueError(response: HttpServletResponse) {
        setStatus(response, HttpServletResponse.SC_UNAUTHORIZED)
        response.setHeader("Authorization", "You shall not pass without providing a valid API Key")
        response.writer.write("{\"errors\": {\"Authorization\": [\"You must provide a valid Authorization header.\"]}}")
        response.writer.flush()
    }

    fun setStatus(response: HttpServletResponse?, sc: Int) {
        if (response != null)
            response.status = sc
    }

    companion object {
        private val LOG = LoggerFactory.getLogger(ApiKeySecuredAspect::class.java)
    }
}
