package org.exampleapps.greatbig.domain.inout

import com.fasterxml.jackson.annotation.JsonRootName
import org.exampleapps.greatbig.domain.User
import org.exampleapps.greatbig.domain.Author
import org.exampleapps.greatbig.repository.AuthorRepository

@JsonRootName("profile")
data class Profile(var username: String,
                   var bio: String,
                   var image: String?,
                   var following: Boolean) {
    companion object {
        fun fromAuthor(author: Author, currentAuthor: Author): Profile {
            return Profile(username = author.user.login, bio = author.bio, image = author.user.imageUrl,
                    following = currentAuthor.followers.contains(author))
        }
    }
}
