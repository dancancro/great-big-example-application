package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Crisis;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Crisis entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CrisisRepository extends JpaRepository<Crisis,Long> {
    
}
