package org.exampleapps.greatbig.web.rest

import com.github.slugify.Slugify
import org.exampleapps.greatbig.exception.ForbiddenRequestException
import org.exampleapps.greatbig.exception.InvalidRequest
import org.exampleapps.greatbig.exception.NotFoundException
import org.exampleapps.greatbig.jwt.ApiKeySecured
import org.exampleapps.greatbig.domain.Article
import org.exampleapps.greatbig.domain.Author
import org.exampleapps.greatbig.domain.Comment
import org.exampleapps.greatbig.domain.Tag
import org.exampleapps.greatbig.domain.User
import org.exampleapps.greatbig.domain.inout.NewArticle
import org.exampleapps.greatbig.domain.inout.NewComment
import org.exampleapps.greatbig.domain.inout.UpdateArticle
import org.exampleapps.greatbig.repository.ArticleRepository
import org.exampleapps.greatbig.repository.CommentRepository
import org.exampleapps.greatbig.repository.AuthorRepository
import org.exampleapps.greatbig.repository.TagRepository
import org.exampleapps.greatbig.repository.UserRepository
import org.exampleapps.greatbig.repository.specification.ArticlesSpecifications
import org.exampleapps.greatbig.service.UserService
import org.exampleapps.greatbig.web.rest.util.PaginationUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional
import org.springframework.validation.Errors
import org.springframework.validation.FieldError
import org.springframework.web.bind.annotation.*
import java.time.OffsetDateTime
import java.util.*
import javax.validation.Valid
import org.exampleapps.greatbig.domain.inout.Article as ArticleIO
import org.exampleapps.greatbig.domain.inout.Comment as CommentOut

@RestController
class ArticleHandler(val repository: ArticleRepository,
                     val userService: UserService,
                     val authorRepository: AuthorRepository,
                     val userRepository: UserRepository,
                     val commentRepository: CommentRepository,
                     val tagRepository: TagRepository) {

    val log: Logger = LoggerFactory.getLogger(ArticleHandler::class.java)

    // @ApiKeySecured(mandatory = false)
    @Transactional
    @GetMapping("/api/articles")
    fun articles(@RequestParam(defaultValue = "20") limit: Int,
                 @RequestParam(defaultValue = "0") offset: Int,
                 @RequestParam(defaultValue = "") tag: String,
                 @RequestParam(defaultValue = "") author: String,
                 @RequestParam(defaultValue = "") favorited: String): Any {

        log.debug("\n\nREST request to get all Articles")

        val p = PageRequest(offset/limit, limit, Sort.Direction.DESC, "createdAt")

        val articles = repository.findAll(ArticlesSpecifications.lastArticles(
                if (tag != "") tagRepository.findByName(tag) else null,
                if (author != "") userRepository.findOneByLogin(author).get() else null,
                if (favorited != "") userRepository.findOneByLogin(favorited).get() else null
        ), p)
        val currentUser = userService.getUserWithAuthorities()
        val currentAuthor = authorRepository.findById(currentUser.getId())

        val headers = PaginationUtil.generatePaginationHttpHeaders(articles, "/api/articles")

        return ResponseEntity(articlesView(articles.toList(), currentAuthor), headers, HttpStatus.OK)
    }

    // @ApiKeySecured
    @Transactional
    @GetMapping("/api/articles/feed")
    fun feed(@RequestParam(defaultValue = "20") limit: Int,
             @RequestParam(defaultValue = "0") offset: Int): Any {

        log.debug("\n\nREST request to get article feed")

        val currentUser = userService.getUserWithAuthorities()
        val currentAuthor = authorRepository.findById(currentUser.getId())
        val articles = repository.findByAuthorIdInOrderByCreatedAtDesc(currentAuthor.followers.map { it.id },
                PageRequest(offset/limit, limit))

        val headers = PaginationUtil.generatePaginationHttpHeaders(articles, "/api/articles/feed")

        return ResponseEntity(articlesView(articles.toList(), currentAuthor), headers, HttpStatus.OK)
    }

    // @ApiKeySecured(mandatory = false)
    @Transactional
    @GetMapping("/api/articles/{slug}")
    fun article(@PathVariable slug: String): Any {

        log.debug("\n\nREST request to get Article for : ", slug)

        val currentUser = userService.getUserWithAuthorities()
        val currentAuthor = authorRepository.findById(currentUser.getId())
        repository.findBySlug(slug)?.let {
            return articleView(it, currentAuthor)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @PostMapping("/api/articles")
    fun newArticle(@Valid @RequestBody newArticle: NewArticle, errors: Errors): Any {

        log.debug("\n\nREST request to add Article : {}", newArticle)

        InvalidRequest.check(errors)

        var slug = Slugify().slugify(newArticle.title!!)

        if (repository.existsBySlug(slug)) {
            slug += "-" + UUID.randomUUID().toString().substring(0, 8)
        }

        val currentUser = userService.getUserWithAuthorities()
        val currentAuthor = authorRepository.findById(currentUser.getId())

        // search for tags
        val tags = newArticle.tags.map {
            tagRepository.findByName(it) ?: tagRepository.save(Tag(name = it))
        }

        val article = Article(slug = slug,
                author = currentAuthor, title = newArticle.title!!, description = newArticle.description!!,
                body = newArticle.body!!, tags = tags.toMutableList())

        return articleView(repository.save(article), currentAuthor)
    }

    // @ApiKeySecured
    @Transactional
    @PutMapping("/api/articles/{slug}")
    fun updateArticle(@PathVariable slug: String, @RequestBody article: UpdateArticle): Any {

        log.debug("\n\nREST request to put Article : {}", slug)

        repository.findBySlug(slug)?.let {
            val currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            if (it.author.id != currentUser.id)
                throw ForbiddenRequestException()

            // check for errors
            val errors = org.springframework.validation.BindException(this, "")
            if (article.title == "")
                errors.addError(FieldError("", "title", "can't be empty"))
            if (article.description == "")
                errors.addError(FieldError("", "description", "can't be empty"))
            if (article.body == "")
                errors.addError(FieldError("", "body", "can't be empty"))
            InvalidRequest.check(errors)

            var slugg: String = it.slug

            article.title?.let { newTitle ->
                if (newTitle != it.title) {
                    // we don't want conflicting slugs
                    slugg = Slugify().slugify(article.title!!)
                    if (repository.existsBySlug(slugg)) {
                        slugg += "-" + UUID.randomUUID().toString().substring(0, 8)
                    }
                }
            }

            // search for tags
            val tags = article.tags?.map {
                tagRepository.findByName(it) ?: tagRepository.save(Tag(name = it))
            }

            val updated = it.copy(title = article.title ?: it.title,
                    description = article.description ?: it.description,
                    body = article.body ?: it.body,
                    slug = slugg,
                    updatedAt = OffsetDateTime.now(),
                    tags = if (tags == null || tags.isEmpty()) it.tags
                    else tags.toMutableList())

            return articleView(repository.save(updated), currentAuthor)
        }

        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/api/articles/{slug}")
    fun deleteArticle(@PathVariable slug: String) {

        log.debug("\n\nREST request to delete Article for: ", slug)

        repository.findBySlug(slug)?.let {
            if (it.author.id != userService.getUserWithAuthorities().id)
                throw ForbiddenRequestException()

            // commentRepository.deleteAll(commentRepository.findByArticle(it))
            return repository.delete(it)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured(mandatory = false)
    @Transactional
    @GetMapping("/api/articles/{slug}/comments")
    fun articleComments(@PathVariable slug: String): Any {

        log.debug("\n\nREST request to get comments for : ", slug)

        repository.findBySlug(slug)?.let {
            val currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            return commentsView(commentRepository.findByArticleOrderByCreatedAtDesc(it), currentAuthor)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @PostMapping("/api/articles/{slug}/comments")
    fun addComment(@PathVariable slug: String, @Valid @RequestBody comment: NewComment, errors: Errors): Any {

        log.debug("\n\nREST request to add comment : {}", comment)

        InvalidRequest.check(errors)

        repository.findBySlug(slug)?.let {
            val currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            val newComment = Comment(body = comment.body!!, article = it, author = currentAuthor)
            return commentView(commentRepository.save(newComment), currentAuthor)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/api/articles/{slug}/comments/{id}")
    fun deleteComment(@PathVariable slug: String, @PathVariable id: Long) {

        log.debug("\n\nREST request to get comments for : ", slug)

        repository.findBySlug(slug)?.let {
            val currentUser = userService.getUserWithAuthorities()
            val comment = commentRepository.findOne(id)
            if (comment == null) {
                throw NotFoundException()
            }
            if (comment.article.id != it.id)
                throw ForbiddenRequestException()
            if (comment.author.id != currentUser.id)
                throw ForbiddenRequestException()

            return commentRepository.delete(comment)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @PostMapping("/api/articles/{slug}/favorite")
    fun favoriteArticle(@PathVariable slug: String): Any {

        log.debug("\n\nREST request to favorite Article : ", slug)

        repository.findBySlug(slug)?.let {
            val currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            if (!it.favorited.contains(currentAuthor)) {
                it.favorited.add(currentAuthor)
                return articleView(repository.save(it), currentAuthor)
            }
            return articleView(it, currentAuthor)
        }
        throw NotFoundException()
    }

    // @ApiKeySecured
    @Transactional
    @DeleteMapping("/api/articles/{slug}/favorite")
    fun unfavoriteArticle(@PathVariable slug: String): Any {

        log.debug("\n\nREST request to unfavorite Article : ", slug)

        repository.findBySlug(slug)?.let {
            val currentUser = userService.getUserWithAuthorities()
            val currentAuthor = authorRepository.findById(currentUser.getId())
            if (it.favorited.contains(currentAuthor)) {
                it.favorited.remove(currentAuthor)
                return articleView(repository.save(it), currentAuthor)
            }
            return articleView(it, currentAuthor)
        }
        throw NotFoundException()
    }

    // helpers

    fun articleView(article: Article, currentAuthor: Author)
        // = mapOf("article" to ArticleIO.fromModel(article, currentAuthor))
        = ArticleIO.fromModel(article, currentAuthor)

    fun articlesView(articles: List<Article>, currentAuthor: Author)
        // = mapOf("articles" to articles.map { ArticleIO.fromModel(it, currentAuthor) },
        // "articlesCount" to articles.size)
        = articles.map { ArticleIO.fromModel(it, currentAuthor) }

    fun commentView(comment: Comment, currentAuthor: Author)
        // = mapOf("comment" to CommentOut.fromModel(comment, currentAuthor))
        = CommentOut.fromModel(comment, currentAuthor)

    fun commentsView(comments: List<Comment>, currentAuthor: Author)
        // = mapOf("comments" to comments.map { CommentOut.fromModel(it, currentAuthor) })
        = comments.map { CommentOut.fromModel(it, currentAuthor) }
}
