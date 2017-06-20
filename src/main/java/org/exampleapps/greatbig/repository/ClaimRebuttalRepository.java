package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.ClaimRebuttal;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the ClaimRebuttal entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClaimRebuttalRepository extends JpaRepository<ClaimRebuttal,Long> {
    
}
