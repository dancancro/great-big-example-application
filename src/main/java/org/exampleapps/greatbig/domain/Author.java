package org.exampleapps.greatbig.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Author.
 */
@Entity
@Table(name = "author")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "author")
public class Author implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Lob
    @Column(name = "bio")
    private String bio;

    @OneToOne
    @JoinColumn(unique = true)
    private User user;

    @OneToMany(mappedBy = "author")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Article> articles = new HashSet<>();

    @OneToMany(mappedBy = "author")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Comment> comments = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "author_follower",
               joinColumns = @JoinColumn(name = "authors_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "followers_id", referencedColumnName = "id"))
    private Set<Author> followers = new HashSet<>();

    @ManyToMany
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JoinTable(name = "author_favorite",
               joinColumns = @JoinColumn(name = "authors_id", referencedColumnName = "id"),
               inverseJoinColumns = @JoinColumn(name = "favorites_id", referencedColumnName = "id"))
    private Set<Article> favorites = new HashSet<>();

    @ManyToMany(mappedBy = "followers")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Author> followees = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBio() {
        return bio;
    }

    public Author bio(String bio) {
        this.bio = bio;
        return this;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public User getUser() {
        return user;
    }

    public Author user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Article> getArticles() {
        return articles;
    }

    public Author articles(Set<Article> articles) {
        this.articles = articles;
        return this;
    }

    public Author addArticle(Article article) {
        this.articles.add(article);
        article.setAuthor(this);
        return this;
    }

    public Author removeArticle(Article article) {
        this.articles.remove(article);
        article.setAuthor(null);
        return this;
    }

    public void setArticles(Set<Article> articles) {
        this.articles = articles;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public Author comments(Set<Comment> comments) {
        this.comments = comments;
        return this;
    }

    public Author addComment(Comment comment) {
        this.comments.add(comment);
        comment.setAuthor(this);
        return this;
    }

    public Author removeComment(Comment comment) {
        this.comments.remove(comment);
        comment.setAuthor(null);
        return this;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Set<Author> getFollowers() {
        return followers;
    }

    public Author followers(Set<Author> authors) {
        this.followers = authors;
        return this;
    }

    public Author addFollower(Author author) {
        this.followers.add(author);
        author.getFollowees().add(this);
        return this;
    }

    public Author removeFollower(Author author) {
        this.followers.remove(author);
        author.getFollowees().remove(this);
        return this;
    }

    public void setFollowers(Set<Author> authors) {
        this.followers = authors;
    }

    public Set<Article> getFavorites() {
        return favorites;
    }

    public Author favorites(Set<Article> articles) {
        this.favorites = articles;
        return this;
    }

    public Author addFavorite(Article article) {
        this.favorites.add(article);
        article.getFavoriters().add(this);
        return this;
    }

    public Author removeFavorite(Article article) {
        this.favorites.remove(article);
        article.getFavoriters().remove(this);
        return this;
    }

    public void setFavorites(Set<Article> articles) {
        this.favorites = articles;
    }

    public Set<Author> getFollowees() {
        return followees;
    }

    public Author followees(Set<Author> authors) {
        this.followees = authors;
        return this;
    }

    public Author addFollowee(Author author) {
        this.followees.add(author);
        author.getFollowers().add(this);
        return this;
    }

    public Author removeFollowee(Author author) {
        this.followees.remove(author);
        author.getFollowers().remove(this);
        return this;
    }

    public void setFollowees(Set<Author> authors) {
        this.followees = authors;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Author author = (Author) o;
        if (author.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), author.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Author{" +
            "id=" + getId() +
            ", bio='" + getBio() + "'" +
            "}";
    }
}
