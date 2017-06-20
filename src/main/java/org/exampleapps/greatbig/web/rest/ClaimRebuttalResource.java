package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.ClaimRebuttal;

import org.exampleapps.greatbig.repository.ClaimRebuttalRepository;
import org.exampleapps.greatbig.repository.search.ClaimRebuttalSearchRepository;
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
 * REST controller for managing ClaimRebuttal.
 */
@RestController
@RequestMapping("/api")
public class ClaimRebuttalResource {

    private final Logger log = LoggerFactory.getLogger(ClaimRebuttalResource.class);

    private static final String ENTITY_NAME = "claimRebuttal";

    private final ClaimRebuttalRepository claimRebuttalRepository;

    private final ClaimRebuttalSearchRepository claimRebuttalSearchRepository;

    public ClaimRebuttalResource(ClaimRebuttalRepository claimRebuttalRepository, ClaimRebuttalSearchRepository claimRebuttalSearchRepository) {
        this.claimRebuttalRepository = claimRebuttalRepository;
        this.claimRebuttalSearchRepository = claimRebuttalSearchRepository;
    }

    /**
     * POST  /claim-rebuttals : Create a new claimRebuttal.
     *
     * @param claimRebuttal the claimRebuttal to create
     * @return the ResponseEntity with status 201 (Created) and with body the new claimRebuttal, or with status 400 (Bad Request) if the claimRebuttal has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/claim-rebuttals")
    @Timed
    public ResponseEntity<ClaimRebuttal> createClaimRebuttal(@RequestBody ClaimRebuttal claimRebuttal) throws URISyntaxException {
        log.debug("REST request to save ClaimRebuttal : {}", claimRebuttal);
        if (claimRebuttal.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new claimRebuttal cannot already have an ID")).body(null);
        }
        ClaimRebuttal result = claimRebuttalRepository.save(claimRebuttal);
        claimRebuttalSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/claim-rebuttals/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /claim-rebuttals : Updates an existing claimRebuttal.
     *
     * @param claimRebuttal the claimRebuttal to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated claimRebuttal,
     * or with status 400 (Bad Request) if the claimRebuttal is not valid,
     * or with status 500 (Internal Server Error) if the claimRebuttal couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/claim-rebuttals")
    @Timed
    public ResponseEntity<ClaimRebuttal> updateClaimRebuttal(@RequestBody ClaimRebuttal claimRebuttal) throws URISyntaxException {
        log.debug("REST request to update ClaimRebuttal : {}", claimRebuttal);
        if (claimRebuttal.getId() == null) {
            return createClaimRebuttal(claimRebuttal);
        }
        ClaimRebuttal result = claimRebuttalRepository.save(claimRebuttal);
        claimRebuttalSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, claimRebuttal.getId().toString()))
            .body(result);
    }

    /**
     * GET  /claim-rebuttals : get all the claimRebuttals.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of claimRebuttals in body
     */
    @GetMapping("/claim-rebuttals")
    @Timed
    public List<ClaimRebuttal> getAllClaimRebuttals() {
        log.debug("REST request to get all ClaimRebuttals");
        return claimRebuttalRepository.findAll();
    }

    /**
     * GET  /claim-rebuttals/:id : get the "id" claimRebuttal.
     *
     * @param id the id of the claimRebuttal to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the claimRebuttal, or with status 404 (Not Found)
     */
    @GetMapping("/claim-rebuttals/{id}")
    @Timed
    public ResponseEntity<ClaimRebuttal> getClaimRebuttal(@PathVariable Long id) {
        log.debug("REST request to get ClaimRebuttal : {}", id);
        ClaimRebuttal claimRebuttal = claimRebuttalRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(claimRebuttal));
    }

    /**
     * DELETE  /claim-rebuttals/:id : delete the "id" claimRebuttal.
     *
     * @param id the id of the claimRebuttal to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/claim-rebuttals/{id}")
    @Timed
    public ResponseEntity<Void> deleteClaimRebuttal(@PathVariable Long id) {
        log.debug("REST request to delete ClaimRebuttal : {}", id);
        claimRebuttalRepository.delete(id);
        claimRebuttalSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/claim-rebuttals?query=:query : search for the claimRebuttal corresponding
     * to the query.
     *
     * @param query the query of the claimRebuttal search
     * @return the result of the search
     */
    @GetMapping("/_search/claim-rebuttals")
    @Timed
    public List<ClaimRebuttal> searchClaimRebuttals(@RequestParam String query) {
        log.debug("REST request to search ClaimRebuttals for query {}", query);
        return StreamSupport
            .stream(claimRebuttalSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
