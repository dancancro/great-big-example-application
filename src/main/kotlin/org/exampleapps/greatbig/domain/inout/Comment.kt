package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import org.exampleapps.greatbig.domain.Author
import java.time.OffsetDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter

@JsonRootName("comment")
data class Comment(val createdAt: String,
                   val updatedAt: String,
                   val body: String,
                   val author: Profile,
                   val id: Long) {
    companion object {
        fun dateFormat(date: OffsetDateTime): String {
            return date.toZonedDateTime().withZoneSameInstant(ZoneId.of("Z")).format(DateTimeFormatter.ISO_ZONED_DATE_TIME)
        }

        fun fromModel(model: org.exampleapps.greatbig.domain.Comment, currentAuthor: Author): Comment {
            return Comment(
                    id = model.id,
                    body = model.body,
                    createdAt = dateFormat(model.createdAt),
                    updatedAt = dateFormat(model.updatedAt),
                    author = Profile.fromAuthor(model.author, currentAuthor)
            )
        }
    }
}
