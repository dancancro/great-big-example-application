package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Claim;

import org.exampleapps.greatbig.repository.ClaimRepository;
import org.exampleapps.greatbig.repository.search.ClaimSearchRepository;
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
 * REST controller for managing Claim.
 */
@RestController
@RequestMapping("/api")
public class ClaimResource {

    private final Logger log = LoggerFactory.getLogger(ClaimResource.class);

    private static final String ENTITY_NAME = "claim";

    private final ClaimRepository claimRepository;

    private final ClaimSearchRepository claimSearchRepository;

    public ClaimResource(ClaimRepository claimRepository, ClaimSearchRepository claimSearchRepository) {
        this.claimRepository = claimRepository;
        this.claimSearchRepository = claimSearchRepository;
    }

    /**
     * POST  /claims : Create a new claim.
     *
     * @param claim the claim to create
     * @return the ResponseEntity with status 201 (Created) and with body the new claim, or with status 400 (Bad Request) if the claim has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/claims")
    @Timed
    public ResponseEntity<Claim> createClaim(@Valid @RequestBody Claim claim) throws URISyntaxException {
        log.debug("REST request to save Claim : {}", claim);
        if (claim.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new claim cannot already have an ID")).body(null);
        }
        Claim result = claimRepository.save(claim);
        claimSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/claims/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /claims : Updates an existing claim.
     *
     * @param claim the claim to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated claim,
     * or with status 400 (Bad Request) if the claim is not valid,
     * or with status 500 (Internal Server Error) if the claim couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/claims")
    @Timed
    public ResponseEntity<Claim> updateClaim(@Valid @RequestBody Claim claim) throws URISyntaxException {
        log.debug("REST request to update Claim : {}", claim);
        if (claim.getId() == null) {
            return createClaim(claim);
        }
        Claim result = claimRepository.save(claim);
        claimSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, claim.getId().toString()))
            .body(result);
    }

    /**
     * GET  /claims : get all the claims.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of claims in body
     */
    @GetMapping("/claims")
    @Timed
    public List<Claim> getAllClaims() {
        log.debug("REST request to get all Claims");
        return claimRepository.findAll();
    }

    /**
     * GET  /claims/:id : get the "id" claim.
     *
     * @param id the id of the claim to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the claim, or with status 404 (Not Found)
     */
    @GetMapping("/claims/{id}")
    @Timed
    public ResponseEntity<Claim> getClaim(@PathVariable Long id) {
        log.debug("REST request to get Claim : {}", id);
        Claim claim = claimRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(claim));
    }

    /**
     * DELETE  /claims/:id : delete the "id" claim.
     *
     * @param id the id of the claim to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/claims/{id}")
    @Timed
    public ResponseEntity<Void> deleteClaim(@PathVariable Long id) {
        log.debug("REST request to delete Claim : {}", id);
        claimRepository.delete(id);
        claimSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/claims?query=:query : search for the claim corresponding
     * to the query.
     *
     * @param query the query of the claim search
     * @return the result of the search
     */
    @GetMapping("/_search/claims")
    @Timed
    public List<Claim> searchClaims(@RequestParam String query) {
        log.debug("REST request to search Claims for query {}", query);
        return StreamSupport
            .stream(claimSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
