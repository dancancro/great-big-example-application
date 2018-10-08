package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.ClaimRebuttal;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ClaimRebuttal entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ClaimRebuttalRepository extends JpaRepository<ClaimRebuttal,Long> {
    
}
