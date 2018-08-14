package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Talk;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Talk entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TalkRepository extends JpaRepository<Talk, Long> {

}
