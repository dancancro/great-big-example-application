package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Talk;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Talk entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TalkRepository extends JpaRepository<Talk, Long> {

}
