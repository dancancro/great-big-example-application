package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Crisis;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Crisis entity.
 */
@SuppressWarnings("unused")
public interface CrisisRepository extends JpaRepository<Crisis,Long> {

}
