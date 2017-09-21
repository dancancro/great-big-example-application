package org.exampleapps.greatbig.repository.specification

import org.exampleapps.greatbig.domain.Article
import org.exampleapps.greatbig.domain.Tag
import org.exampleapps.greatbig.domain.User
import org.springframework.data.jpa.domain.Specification
import javax.persistence.criteria.Predicate

object ArticlesSpecifications {
    fun lastArticles(tag: Tag?, author: User?, fav: User?): Specification<Article> {
        return Specification { root, query, cb ->
            val predicates = mutableListOf<Predicate>()

            tag?.let {
                val tags = root.get<Collection<Tag>>("tags")
                predicates.add(cb.isMember(tag, tags))
            }

            author?.let {
                val user = root.get<String>("author")
                predicates.add(cb.equal(user, author))
            }

            fav?.let {
                val favorited = root.get<Collection<User>>("favorited")
                predicates.add(cb.isMember(fav, favorited))
            }

            cb.and(*predicates.toTypedArray())
        }
    }
}
