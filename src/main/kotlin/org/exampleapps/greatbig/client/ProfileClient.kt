package org.exampleapps.greatbig.client

import feign.Headers
import feign.Param
import feign.RequestLine
import org.exampleapps.greatbig.client.response.OutProfile

@Headers("Content-Type: application/json",
        "Authorization: Token {token}")
interface ProfileClient {
    @RequestLine("GET /api/profiles/{username}")
    fun profile(@Param("token") token: String, @Param("username") username: String): OutProfile

    @RequestLine("POST /api/profiles/{username}/follow")
    fun follow(@Param("token") token: String, @Param("username") username: String): OutProfile

    @RequestLine("DELETE /api/profiles/{username}/follow")
    fun unfollow(@Param("token") token: String, @Param("username") username: String): OutProfile
}
