package org.exampleapps.greatbig.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Talk.
 */
@Entity
@Table(name = "talk")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "talk")
public class Talk implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    // @NotNull  could be null if only setting youRating
    @Column(name = "title", nullable = false)
    private String title;

    // @NotNull  could be null if only setting youRating
    @Column(name = "speaker", nullable = false)
    private String speaker;

    // @NotNull  could be null if only setting youRating
    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    @DecimalMax(value = "10")
    @Column(name = "your_rating")
    private Float yourRating;

    @Column(name = "rating")
    private Float rating;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Talk title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSpeaker() {
        return speaker;
    }

    public Talk speaker(String speaker) {
        this.speaker = speaker;
        return this;
    }

    public void setSpeaker(String speaker) {
        this.speaker = speaker;
    }

    public String getDescription() {
        return description;
    }

    public Talk description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getYourRating() {
        return yourRating;
    }

    public Talk yourRating(Float yourRating) {
        this.yourRating = yourRating;
        return this;
    }

    public void setYourRating(Float yourRating) {
        this.yourRating = yourRating;
    }

    public Float getRating() {
        return rating;
    }

    public Talk rating(Float rating) {
        this.rating = rating;
        return this;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Talk talk = (Talk) o;
        if (talk.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), talk.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Talk{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", speaker='" + getSpeaker() + "'" +
            ", description='" + getDescription() + "'" +
            ", yourRating='" + getYourRating() + "'" +
            ", rating='" + getRating() + "'" +
            "}";
    }
}
