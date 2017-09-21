package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import org.exampleapps.greatbig.domain.Author
import java.time.OffsetDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter

// @JsonRootName("article")
data class Article(var title: String? = null,
                   var description: String? = null,
                   var body: String? = null,
                   var tags: List<String> = listOf(),
                   var slug: String = "",
                   var createdAt: String = "",
                   var updatedAt: String = "",
                   var author: Profile = Profile(username = "", bio = "", image = "", following = false),
                   var favorited: Boolean = false,
                   var favoritesCount: Int = 0) {
    companion object {
        fun dateFormat(date: OffsetDateTime): String {
            return date.toZonedDateTime().withZoneSameInstant(ZoneId.of("Z")).format(DateTimeFormatter.ISO_ZONED_DATE_TIME)
        }

        fun fromModel(model: org.exampleapps.greatbig.domain.Article, currentAuthor: Author): Article {
            return Article(
                    slug = model.slug,
                    title = model.title,
                    description = model.description,
                    body = model.body,
                    tags = model.tags.map { it.name },
                    createdAt = dateFormat(model.createdAt),
                    updatedAt = dateFormat(model.updatedAt),
                    author = Profile.fromAuthor(model.author, currentAuthor),
                    favorited = model.favorited.contains(currentAuthor),
                    favoritesCount = model.favorited.size)
        }
    }
}
