package org.exampleapps.greatbig.repository

import org.exampleapps.greatbig.domain.Article
import org.exampleapps.greatbig.domain.Comment
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface CommentRepository : CrudRepository<Comment, Long> {
    fun findByArticle(article: Article): List<Comment>
    fun findByArticleOrderByCreatedAtDesc(article: Article): List<Comment>
}
