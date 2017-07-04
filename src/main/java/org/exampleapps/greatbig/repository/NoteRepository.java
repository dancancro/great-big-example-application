package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Note;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Note entity.
 */
@SuppressWarnings("unused")
@Repository
public interface NoteRepository extends JpaRepository<Note,String> {

}
