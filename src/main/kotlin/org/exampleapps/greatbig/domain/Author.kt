package org.exampleapps.greatbig.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import com.fasterxml.jackson.annotation.JsonRootName
import javax.persistence.*
import org.hibernate.annotations.Type

@Entity
@JsonRootName("author")
data class Author(
                @Id
                var id: Long = 0,

                @Lob
                @Type( type = "org.hibernate.type.TextType" )
                var bio: String = "",

                @MapsId
                @OneToOne
                @JoinColumn(name = "id")
	            var user: User = User(),

                @ManyToMany()
                @JsonIgnore
                @JoinTable(name = "author_follower",
                    joinColumns = arrayOf(JoinColumn(name = "AUTHOR_ID", referencedColumnName = "id", nullable = false, updatable = false) ),
                    inverseJoinColumns = arrayOf(JoinColumn(name = "FOLLOWER_ID", referencedColumnName = "id", nullable = false, updatable = false) ))
                var followers: MutableList<Author> = mutableListOf()
                ) {
    override fun toString(): String = "Author($id, $bio)"
}
