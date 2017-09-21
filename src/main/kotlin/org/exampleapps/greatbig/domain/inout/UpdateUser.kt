package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import javax.validation.constraints.NotNull
import javax.validation.constraints.Pattern
import javax.validation.constraints.Size

@JsonRootName("user")
class UpdateUser {
    @Size(min = 1, message = "can't be empty")
    @Pattern(regexp="^\\w+$", message = "must be alphanumeric")
    var username: String? = null

    @Size(min = 1, message = "can't be empty")
    @Pattern(regexp="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$", message="must be a valid email")
    var email: String? = null

    var password: String? = null
    var image: String? = ""
    var bio: String? = ""
}