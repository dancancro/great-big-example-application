package org.exampleapps.greatbig.web.rest

import org.exampleapps.greatbig.exception.InvalidException
import org.springframework.http.HttpStatus
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestControllerAdvice

/**
 * Generates an error with the following format:
 *
<pre>
{
"errors":{
"body": [
"can't be empty"
]
}
}
</pre>
 */
@Component
@RestControllerAdvice
class InvalidRequestHandler {
    @ResponseBody
    @ExceptionHandler
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    fun processValidationError(ex: InvalidException): Any {
        val errors = mutableMapOf<String, MutableList<String>>()
        ex.errors?.fieldErrors?.forEach {
            if (errors.containsKey(it.field))
                errors.get(it.field)!!.add(it.defaultMessage)
            else
                errors.put(it.field, mutableListOf(it.defaultMessage))
        }
        return mapOf("errors" to errors)
    }
}
