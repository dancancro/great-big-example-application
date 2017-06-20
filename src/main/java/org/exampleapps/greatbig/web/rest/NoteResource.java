package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Note;

import org.exampleapps.greatbig.repository.NoteRepository;
import org.exampleapps.greatbig.repository.search.NoteSearchRepository;
import org.exampleapps.greatbig.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Note.
 */
@RestController
@RequestMapping("/api")
public class NoteResource {

    private final Logger log = LoggerFactory.getLogger(NoteResource.class);

    private static final String ENTITY_NAME = "note";

    private final NoteRepository noteRepository;

    private final NoteSearchRepository noteSearchRepository;

    public NoteResource(NoteRepository noteRepository, NoteSearchRepository noteSearchRepository) {
        this.noteRepository = noteRepository;
        this.noteSearchRepository = noteSearchRepository;
    }

    /**
     * POST  /notes : Create a new note.
     *
     * @param note the note to create
     * @return the ResponseEntity with status 201 (Created) and with body the new note, or with status 400 (Bad Request) if the note has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/notes")
    @Timed
    public ResponseEntity<Note> createNote(@RequestBody Note note) throws URISyntaxException {
        log.debug("REST request to save Note : {}", note);
        // if (note.getId() != null) {
        //     return ResponseEntity.badRequest().headers(
        //             HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new note cannot already have an ID"))
        //             .body(null);
        // }
        Note result = noteRepository.save(note);
        noteSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/notes/" + result.getId()))
                .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString())).body(result);
    }

    /**
     * PUT  /notes : Updates an existing note.
     *
     * @param note the note to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated note,
     * or with status 400 (Bad Request) if the note is not valid,
     * or with status 500 (Internal Server Error) if the note couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/notes")
    @Timed
    public ResponseEntity<Note> updateNote(@RequestBody Note note) throws URISyntaxException {
        log.debug("REST request to update Note : {}", note);
        if (note.getId() == null) {
            return createNote(note);
        }
        Note result = noteRepository.save(note);
        noteSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, note.getId().toString()))
            .body(result);
    }

    /**
     * GET  /notes : get all the notes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of notes in body
     */
    @GetMapping("/notes")
    @Timed
    public List<Note> getAllNotes() {
        log.debug("REST request to get all Notes");
        return noteRepository.findAll();
    }

    /**
     * GET  /notes/:id : get the "id" note.
     *
     * @param id the id of the note to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the note, or with status 404 (Not Found)
     */
    @GetMapping("/notes/{id}")
    @Timed
    public ResponseEntity<Note> getNote(@PathVariable String id) {
        log.debug("REST request to get Note : {}", id);
        Note note = noteRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(note));
    }

    /**
     * DELETE  /notes/:id : delete the "id" note.
     *
     * @param id the id of the note to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/notes/{id}")
    @Timed
    public ResponseEntity<Void> deleteNote(@PathVariable String id) {
        log.debug("REST request to delete Note : {}", id);
        noteRepository.delete(id);
        noteSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/notes?query=:query : search for the note corresponding
     * to the query.
     *
     * @param query the query of the note search
     * @return the result of the search
     */
    @GetMapping("/_search/notes")
    @Timed
    public List<Note> searchNotes(@RequestParam String query) {
        log.debug("REST request to search Notes for query {}", query);
        return StreamSupport.stream(noteSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
