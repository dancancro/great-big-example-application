package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Rebuttal;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Rebuttal entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RebuttalRepository extends JpaRepository<Rebuttal, Long> {

}
