package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Talk;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Talk entity.
 */
@SuppressWarnings("unused")
public interface TalkRepository extends JpaRepository<Talk,Long> {

}
