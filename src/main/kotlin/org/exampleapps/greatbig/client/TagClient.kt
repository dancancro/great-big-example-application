package org.exampleapps.greatbig.client

import feign.Headers
import feign.RequestLine
import org.exampleapps.greatbig.client.response.OutTag

interface TagClient {
    @RequestLine("GET /api/tags")
    @Headers("Content-Type: application/json")
    fun tags(): OutTag
}
