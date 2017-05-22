package org.exampleapps.greatbig.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Rebuttal.
 */
@Entity
@Table(name = "rebuttal")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "rebuttal")
public class Rebuttal implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Size(min = 20, max = 1200)
    @Column(name = "long_name", length = 1200)
    private String longName;

    @Column(name = "short_name")
    private String shortName;

    @Column(name = "jhi_date")
    private ZonedDateTime date;

    @Column(name = "expires")
    private ZonedDateTime expires;

    @Column(name = "jhi_link")
    private String link;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLongName() {
        return longName;
    }

    public Rebuttal longName(String longName) {
        this.longName = longName;
        return this;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }

    public String getShortName() {
        return shortName;
    }

    public Rebuttal shortName(String shortName) {
        this.shortName = shortName;
        return this;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public ZonedDateTime getDate() {
        return date;
    }

    public Rebuttal date(ZonedDateTime date) {
        this.date = date;
        return this;
    }

    public void setDate(ZonedDateTime date) {
        this.date = date;
    }

    public ZonedDateTime getExpires() {
        return expires;
    }

    public Rebuttal expires(ZonedDateTime expires) {
        this.expires = expires;
        return this;
    }

    public void setExpires(ZonedDateTime expires) {
        this.expires = expires;
    }

    public String getLink() {
        return link;
    }

    public Rebuttal link(String link) {
        this.link = link;
        return this;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Rebuttal rebuttal = (Rebuttal) o;
        if (rebuttal.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), rebuttal.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Rebuttal{" +
            "id=" + getId() +
            ", longName='" + getLongName() + "'" +
            ", shortName='" + getShortName() + "'" +
            ", date='" + getDate() + "'" +
            ", expires='" + getExpires() + "'" +
            ", link='" + getLink() + "'" +
            "}";
    }
}
