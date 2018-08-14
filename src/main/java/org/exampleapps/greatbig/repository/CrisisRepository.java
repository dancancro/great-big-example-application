package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Crisis;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Crisis entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CrisisRepository extends JpaRepository<Crisis, Long> {

}
