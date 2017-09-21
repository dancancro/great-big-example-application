package org.exampleapps.greatbig.repository

import org.exampleapps.greatbig.domain.Tag
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface TagRepository : CrudRepository<Tag, Long> {
    fun findByName(name: String): Tag?
}