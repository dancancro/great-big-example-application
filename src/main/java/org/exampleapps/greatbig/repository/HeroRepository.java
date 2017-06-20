package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Hero;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Hero entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HeroRepository extends JpaRepository<Hero,Long> {
    
}
