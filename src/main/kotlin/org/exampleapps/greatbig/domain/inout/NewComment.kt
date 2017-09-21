package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

@JsonRootName("comment")
class NewComment {
    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    var body: String? = ""
}