package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.ClaimRebuttal;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ClaimRebuttal entity.
 */
@SuppressWarnings("unused")
public interface ClaimRebuttalRepository extends JpaRepository<ClaimRebuttal,Long> {

}
