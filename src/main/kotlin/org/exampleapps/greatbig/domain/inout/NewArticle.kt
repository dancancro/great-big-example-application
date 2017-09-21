package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

@JsonRootName("article")
class NewArticle {
    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    var title: String? = ""

    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    var description: String? = ""

    @NotNull(message = "can't be missing")
    @Size(min = 1, message = "can't be empty")
    var body: String? = ""

    var tags: List<String> = listOf()
}
