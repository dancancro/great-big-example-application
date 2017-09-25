package org.exampleapps.greatbig.repository

import org.exampleapps.greatbig.domain.Article
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Page
import org.springframework.data.jpa.repository.JpaSpecificationExecutor
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface ArticleRepository : PagingAndSortingRepository<Article, Long>, JpaSpecificationExecutor<Article> {
    fun existsBySlug(slug: String): Boolean
    fun findBySlug(slug: String): Article?
    fun findByAuthorIdInOrderByCreatedAtDesc(ids: List<Long>, pageable: Pageable): Page<Article>
}
