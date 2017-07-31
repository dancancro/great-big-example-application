package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Claim;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Claim entity.
 */
@SuppressWarnings("unused")
public interface ClaimRepository extends JpaRepository<Claim,Long> {

}
