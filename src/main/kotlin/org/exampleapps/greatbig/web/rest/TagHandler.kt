package org.exampleapps.greatbig.web.rest

import org.exampleapps.greatbig.domain.Tag
import org.exampleapps.greatbig.repository.TagRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TagHandler(val repository: TagRepository) {
    @GetMapping("/api/tags")
    fun allTags() = repository.findAll().map(Tag::name)
}
