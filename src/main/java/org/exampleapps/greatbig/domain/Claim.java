package org.exampleapps.greatbig.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Claim.
 */
@Entity
@Table(name = "claim")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "claim")
public class Claim implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "sort_order")
    private Integer sortOrder;

    @Column(name = "image_label")
    private String imageLabel;

    @Column(name = "image_link")
    private String imageLink;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Claim name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public Claim sortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public String getImageLabel() {
        return imageLabel;
    }

    public Claim imageLabel(String imageLabel) {
        this.imageLabel = imageLabel;
        return this;
    }

    public void setImageLabel(String imageLabel) {
        this.imageLabel = imageLabel;
    }

    public String getImageLink() {
        return imageLink;
    }

    public Claim imageLink(String imageLink) {
        this.imageLink = imageLink;
        return this;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
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
        Claim claim = (Claim) o;
        if (claim.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), claim.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Claim{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", sortOrder=" + getSortOrder() +
            ", imageLabel='" + getImageLabel() + "'" +
            ", imageLink='" + getImageLink() + "'" +
            "}";
    }
}
