package org.exampleapps.greatbig.repository

import org.exampleapps.greatbig.domain.Author
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface AuthorRepository : CrudRepository<Author, Long> {
    // fun existsByEmail(email: String): Boolean
    // fun existsByUsername(username: String): Boolean
    // fun findByEmail(email: String): Author?
    // fun findByToken(token: String): Author?
    // fun findByEmailAndPassword(email: String, password: String): Author?
    // fun findByUsername(username: String): Author?
    fun findById(id: Long): Author
}
