package org.exampleapps.greatbig.exception

class InvalidLoginException(val field: String, val error: String) : RuntimeException()
