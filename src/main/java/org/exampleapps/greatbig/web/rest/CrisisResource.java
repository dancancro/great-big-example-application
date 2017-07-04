package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Crisis;

import org.exampleapps.greatbig.repository.CrisisRepository;
import org.exampleapps.greatbig.repository.search.CrisisSearchRepository;
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
 * REST controller for managing Crisis.
 */
@RestController
@RequestMapping("/api")
public class CrisisResource {

    private final Logger log = LoggerFactory.getLogger(CrisisResource.class);

    private static final String ENTITY_NAME = "crisis";

    private final CrisisRepository crisisRepository;

    private final CrisisSearchRepository crisisSearchRepository;

    public CrisisResource(CrisisRepository crisisRepository, CrisisSearchRepository crisisSearchRepository) {
        this.crisisRepository = crisisRepository;
        this.crisisSearchRepository = crisisSearchRepository;
    }

    /**
     * POST  /crises : Create a new crisis.
     *
     * @param crisis the crisis to create
     * @return the ResponseEntity with status 201 (Created) and with body the new crisis, or with status 400 (Bad Request) if the crisis has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/crises")
    @Timed
    public ResponseEntity<Crisis> createCrisis(@Valid @RequestBody Crisis crisis) throws URISyntaxException {
        log.debug("REST request to save Crisis : {}", crisis);
        if (crisis.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new crisis cannot already have an ID")).body(null);
        }
        Crisis result = crisisRepository.save(crisis);
        crisisSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/crises/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /crises : Updates an existing crisis.
     *
     * @param crisis the crisis to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated crisis,
     * or with status 400 (Bad Request) if the crisis is not valid,
     * or with status 500 (Internal Server Error) if the crisis couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/crises")
    @Timed
    public ResponseEntity<Crisis> updateCrisis(@Valid @RequestBody Crisis crisis) throws URISyntaxException {
        log.debug("REST request to update Crisis : {}", crisis);
        if (crisis.getId() == null) {
            return createCrisis(crisis);
        }
        Crisis result = crisisRepository.save(crisis);
        crisisSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, crisis.getId().toString()))
            .body(result);
    }

    /**
     * GET  /crises : get all the crises.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of crises in body
     */
    @GetMapping("/crises")
    @Timed
    public List<Crisis> getAllCrises() {
        log.debug("REST request to get all Crises");
        return crisisRepository.findAll();
    }

    /**
     * GET  /crises/:id : get the "id" crisis.
     *
     * @param id the id of the crisis to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the crisis, or with status 404 (Not Found)
     */
    @GetMapping("/crises/{id}")
    @Timed
    public ResponseEntity<Crisis> getCrisis(@PathVariable Long id) {
        log.debug("REST request to get Crisis : {}", id);
        Crisis crisis = crisisRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(crisis));
    }

    /**
     * DELETE  /crises/:id : delete the "id" crisis.
     *
     * @param id the id of the crisis to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/crises/{id}")
    @Timed
    public ResponseEntity<Void> deleteCrisis(@PathVariable Long id) {
        log.debug("REST request to delete Crisis : {}", id);
        crisisRepository.delete(id);
        crisisSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/crises?query=:query : search for the crisis corresponding
     * to the query.
     *
     * @param query the query of the crisis search
     * @return the result of the search
     */
    @GetMapping("/_search/crises")
    @Timed
    public List<Crisis> searchCrises(@RequestParam String query) {
        log.debug("REST request to search Crises for query {}", query);
        return StreamSupport
            .stream(crisisSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
