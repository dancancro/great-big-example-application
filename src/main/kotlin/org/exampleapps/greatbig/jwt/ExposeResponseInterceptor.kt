package org.exampleapps.greatbig.jwt

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter

import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

/**
 * This is an interceptor that saves a reference from the response into the request.
 * Spring can autowire HttpServletRequest but not HttpServletResponses.

 * We've got 3 solutions there:
 * 1) We inject HttpServletResponse as a parameter of every @Controller methods.
 * 2) We create a scoped-proxy factory bean that instantiate a filter which holds a threadlocal containing the response.
 * 3) We create an interceptor and save a reference to the response, inside the request which can be autowired by spring.

 * This is the solution number 3. It's kind of hacky, but it's being accessed only from the ApiKeySecuredAspect class.

 * Trust me, I'm an engineer.
 */
class ExposeResponseInterceptor : HandlerInterceptorAdapter() {
    @Throws(ServletException::class)
    override fun preHandle(request: HttpServletRequest?, response: HttpServletResponse?, handler: Any?): Boolean {
        request!!.setAttribute(KEY, response)
        return true
    }

    companion object {
        val KEY = "spring.internal.httpServletResponse"
    }
}
