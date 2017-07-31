package org.exampleapps.greatbig.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A ClaimRebuttal.
 */
@Entity
@Table(name = "claim_rebuttal")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "claimrebuttal")
public class ClaimRebuttal implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "claim_id")
    private Long claimId;

    @Column(name = "rebuttal_id")
    private Long rebuttalId;

    @Column(name = "sort_order")
    private Integer sortOrder;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClaimId() {
        return claimId;
    }

    public ClaimRebuttal claimId(Long claimId) {
        this.claimId = claimId;
        return this;
    }

    public void setClaimId(Long claimId) {
        this.claimId = claimId;
    }

    public Long getRebuttalId() {
        return rebuttalId;
    }

    public ClaimRebuttal rebuttalId(Long rebuttalId) {
        this.rebuttalId = rebuttalId;
        return this;
    }

    public void setRebuttalId(Long rebuttalId) {
        this.rebuttalId = rebuttalId;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public ClaimRebuttal sortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ClaimRebuttal claimRebuttal = (ClaimRebuttal) o;
        if (claimRebuttal.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), claimRebuttal.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ClaimRebuttal{" +
            "id=" + getId() +
            ", claimId='" + getClaimId() + "'" +
            ", rebuttalId='" + getRebuttalId() + "'" +
            ", sortOrder='" + getSortOrder() + "'" +
            "}";
    }
}
