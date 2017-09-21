package org.exampleapps.greatbig.client

import feign.Headers
import feign.RequestLine
import org.exampleapps.greatbig.client.response.InLogin
import org.exampleapps.greatbig.client.response.InRegister
import org.exampleapps.greatbig.client.response.OutUser

@Headers("Content-Type: application/json")
interface UserClient {
    @RequestLine("POST /api/users/login")
    fun login(login: InLogin): OutUser

    @RequestLine("POST /api/users")
    fun register(register: InRegister): OutUser
}
