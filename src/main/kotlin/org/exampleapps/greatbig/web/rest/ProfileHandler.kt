package org.exampleapps.greatbig.web.rest

import org.exampleapps.greatbig.exception.NotFoundException
import org.exampleapps.greatbig.jwt.ApiKeySecured
import org.exampleapps.greatbig.domain.User
import org.exampleapps.greatbig.domain.Author
import org.exampleapps.greatbig.domain.inout.Profile
import org.exampleapps.greatbig.repository.UserRepository
import org.exampleapps.greatbig.repository.AuthorRepository
import org.exampleapps.greatbig.service.UserService
import org.springframework.web.bind.annotation.*
import org.springframework.transaction.annotation.Transactional

@RestController
class ProfileHandler(val userRepository: UserRepository,
                     val authorRepository: AuthorRepository,
                     val userService: UserService) {

    // @ApiKeySecured(mandatory = false)
    @Transactional
    @GetMapping("/api/profiles/{username}")
    fun profile(@PathVariable username: String): Any {
        val user = userRepository.findOneByLogin(username);
        authorRepository.findById(user.get().getId())?.let {
            val currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            return view(it, currentAuthor)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @PostMapping("/api/profiles/{username}/follow")
    fun follow(@PathVariable username: String): Any {
        val user = userRepository.findOneByLogin(username);
        authorRepository.findById(user.get().getId())?.let {
            var currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            if (!currentAuthor.followers.contains(it)) {
                currentAuthor.followers.add(it)
                // currentAuthor = userService.setCurrentUser(userRepository.save(currentUser))
            }
            return view(it, currentAuthor)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @DeleteMapping("/api/profiles/{username}/follow")
    fun unfollow(@PathVariable username: String): Any {
        val user = userRepository.findOneByLogin(username);
        authorRepository.findById(user.get().getId())?.let {
            var currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            if (currentAuthor.followers.contains(it)) {
                currentAuthor.followers.remove(it)
                // currentAuthor = userService.setCurrentUser(userRepository.save(currentUser))
            }
            return view(it, currentAuthor)
        }
        throw NotFoundException()
    }

    fun view(author: Author, currentAuthor: Author) = Profile.fromAuthor(author, currentAuthor)

}
