package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Rebuttal;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Rebuttal entity.
 */
@SuppressWarnings("unused")
public interface RebuttalRepository extends JpaRepository<Rebuttal,Long> {

}
