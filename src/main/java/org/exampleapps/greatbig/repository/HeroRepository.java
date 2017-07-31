package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Hero;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Hero entity.
 */
@SuppressWarnings("unused")
public interface HeroRepository extends JpaRepository<Hero,Long> {

}
