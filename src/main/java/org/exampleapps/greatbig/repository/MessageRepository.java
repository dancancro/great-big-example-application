package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Message;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Message entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MessageRepository extends JpaRepository<Message,Long> {
    
}
