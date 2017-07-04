package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Claim;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Claim entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClaimRepository extends JpaRepository<Claim,Long> {
    
}
