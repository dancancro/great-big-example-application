package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Rebuttal;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Rebuttal entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RebuttalRepository extends JpaRepository<Rebuttal,Long> {
    
}
