package org.exampleapps.greatbig.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Note.
 */
@Entity
@Table(name = "note")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "note")
public class Note implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    // @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    // @SequenceGenerator(name = "sequenceGenerator")
    private String id;

    @Column(name = "text")
    private String text;

    @Column(name = "colour")
    private String colour;

    @Column(name = "jhi_left")
    private Integer left;

    @Column(name = "jhi_top")
    private Integer top;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Note id(String id) {
        this.id = id;
        return this;
    }

    public String getText() {
        return text;
    }

    public Note text(String text) {
        this.text = text;
        return this;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getColour() {
        return colour;
    }

    public Note colour(String colour) {
        this.colour = colour;
        return this;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public Integer getLeft() {
        return left;
    }

    public Note left(Integer left) {
        this.left = left;
        return this;
    }

    public void setLeft(Integer left) {
        this.left = left;
    }

    public Integer getTop() {
        return top;
    }

    public Note top(Integer top) {
        this.top = top;
        return this;
    }

    public void setTop(Integer top) {
        this.top = top;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Note note = (Note) o;
        if (note.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), note.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Note{" +
            "id=" + getId() +
            ", text='" + getText() + "'" +
            ", colour='" + getColour() + "'" +
            ", left='" + getLeft() + "'" +
            ", top='" + getTop() + "'" +
            "}";
    }
}
