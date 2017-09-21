package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size

@JsonRootName("user")
class Register {
    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    @Pattern(regexp="^\\w+$", message = "must be alphanumeric")
    var username: String? = ""

    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    @Pattern(regexp="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$", message="must be a valid email")
    var email: String? = ""

    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    var password: String? = ""

    constructor(username: String?, email: String?, password: String?) {
        this.username = username
        this.email = email
        this.password = password
    }
}