package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Rebuttal;

import org.exampleapps.greatbig.repository.RebuttalRepository;
import org.exampleapps.greatbig.repository.search.RebuttalSearchRepository;
import org.exampleapps.greatbig.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Rebuttal.
 */
@RestController
@RequestMapping("/api")
public class RebuttalResource {

    private final Logger log = LoggerFactory.getLogger(RebuttalResource.class);

    private static final String ENTITY_NAME = "rebuttal";

    private final RebuttalRepository rebuttalRepository;

    private final RebuttalSearchRepository rebuttalSearchRepository;

    public RebuttalResource(RebuttalRepository rebuttalRepository, RebuttalSearchRepository rebuttalSearchRepository) {
        this.rebuttalRepository = rebuttalRepository;
        this.rebuttalSearchRepository = rebuttalSearchRepository;
    }

    /**
     * POST  /rebuttals : Create a new rebuttal.
     *
     * @param rebuttal the rebuttal to create
     * @return the ResponseEntity with status 201 (Created) and with body the new rebuttal, or with status 400 (Bad Request) if the rebuttal has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/rebuttals")
    @Timed
    public ResponseEntity<Rebuttal> createRebuttal(@Valid @RequestBody Rebuttal rebuttal) throws URISyntaxException {
        log.debug("REST request to save Rebuttal : {}", rebuttal);
        if (rebuttal.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new rebuttal cannot already have an ID")).body(null);
        }
        Rebuttal result = rebuttalRepository.save(rebuttal);
        rebuttalSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/rebuttals/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /rebuttals : Updates an existing rebuttal.
     *
     * @param rebuttal the rebuttal to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated rebuttal,
     * or with status 400 (Bad Request) if the rebuttal is not valid,
     * or with status 500 (Internal Server Error) if the rebuttal couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/rebuttals")
    @Timed
    public ResponseEntity<Rebuttal> updateRebuttal(@Valid @RequestBody Rebuttal rebuttal) throws URISyntaxException {
        log.debug("REST request to update Rebuttal : {}", rebuttal);
        if (rebuttal.getId() == null) {
            return createRebuttal(rebuttal);
        }
        Rebuttal result = rebuttalRepository.save(rebuttal);
        rebuttalSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, rebuttal.getId().toString()))
            .body(result);
    }

    /**
     * GET  /rebuttals : get all the rebuttals.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of rebuttals in body
     */
    @GetMapping("/rebuttals")
    @Timed
    public List<Rebuttal> getAllRebuttals() {
        log.debug("REST request to get all Rebuttals");
        return rebuttalRepository.findAll();
    }

    /**
     * GET  /rebuttals/:id : get the "id" rebuttal.
     *
     * @param id the id of the rebuttal to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the rebuttal, or with status 404 (Not Found)
     */
    @GetMapping("/rebuttals/{id}")
    @Timed
    public ResponseEntity<Rebuttal> getRebuttal(@PathVariable Long id) {
        log.debug("REST request to get Rebuttal : {}", id);
        Rebuttal rebuttal = rebuttalRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(rebuttal));
    }

    /**
     * DELETE  /rebuttals/:id : delete the "id" rebuttal.
     *
     * @param id the id of the rebuttal to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/rebuttals/{id}")
    @Timed
    public ResponseEntity<Void> deleteRebuttal(@PathVariable Long id) {
        log.debug("REST request to delete Rebuttal : {}", id);
        rebuttalRepository.delete(id);
        rebuttalSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/rebuttals?query=:query : search for the rebuttal corresponding
     * to the query.
     *
     * @param query the query of the rebuttal search
     * @return the result of the search
     */
    @GetMapping("/_search/rebuttals")
    @Timed
    public List<Rebuttal> searchRebuttals(@RequestParam String query) {
        log.debug("REST request to search Rebuttals for query {}", query);
        return StreamSupport
            .stream(rebuttalSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
