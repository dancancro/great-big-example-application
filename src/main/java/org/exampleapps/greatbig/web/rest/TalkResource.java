package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Talk;

import org.exampleapps.greatbig.repository.TalkRepository;
import org.exampleapps.greatbig.repository.search.TalkSearchRepository;
import org.exampleapps.greatbig.web.rest.util.HeaderUtil;
import org.exampleapps.greatbig.web.rest.util.PaginationUtil;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
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
 * REST controller for managing Talk.
 */
@RestController
@RequestMapping("/api")
public class TalkResource {

    private final Logger log = LoggerFactory.getLogger(TalkResource.class);

    private static final String ENTITY_NAME = "talk";

    private final TalkRepository talkRepository;

    private final TalkSearchRepository talkSearchRepository;

    public TalkResource(TalkRepository talkRepository, TalkSearchRepository talkSearchRepository) {
        this.talkRepository = talkRepository;
        this.talkSearchRepository = talkSearchRepository;
    }

    /**
     * POST  /talks : Create a new talk.
     *
     * @param talk the talk to create
     * @return the ResponseEntity with status 201 (Created) and with body the new talk, or with status 400 (Bad Request) if the talk has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/talks")
    @Timed
    public ResponseEntity<Talk> createTalk(@Valid @RequestBody Talk talk) throws URISyntaxException {
        log.debug("REST request to save Talk : {}", talk);
        if (talk.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new talk cannot already have an ID")).body(null);
        }

        if (talk.getTitle() == null || talk.getSpeaker() == null || talk.getDescription() == null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "nulls", "A talk must have a title, speaker and description")).body(null);
        }

        Talk result = talkRepository.save(talk);
        talkSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/talks/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /talks : Updates an existing talk.
     *
     * @param talk the talk to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated talk,
     * or with status 400 (Bad Request) if the talk is not valid,
     * or with status 500 (Internal Server Error) if the talk couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/talks")
    @Timed
    public ResponseEntity<Talk> updateTalk(@Valid @RequestBody Talk requestTalk) throws URISyntaxException {
        log.debug("REST request to update Talk : {}", requestTalk);
        if (requestTalk.getId() == null) {
            return createTalk(requestTalk);
        }
        Talk talk = talkRepository.findById(requestTalk.getId());
        if(requestTalk.getTitle() != null) {
            talk.setTitle(requestTalk.getTitle());
        }
        if(requestTalk.getSpeaker() != null) {
            talk.setSpeaker(requestTalk.getSpeaker());
        }
        if(requestTalk.getDescription() != null) {
            talk.setDescription(requestTalk.getDescription());
        }
        if(requestTalk.getYourRating() != null) {
            talk.setYourRating(requestTalk.getYourRating());
        }
        if(requestTalk.getRating() != null) {
            talk.setRating(requestTalk.getRating());
        }

        if (talk.getTitle() == null || talk.getSpeaker() == null || talk.getDescription() == null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "nulls", "A talk must have a title, speaker and description")).body(null);
        }

        Talk result = talkRepository.save(talk);
        talkSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, requestTalk.getId().toString()))
            .body(result);
    }

    /**
     * GET  /talks : get all the talks.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of talks in body
     */
    @GetMapping("/talks")
    @Timed
    public ResponseEntity<List<Talk>> getTalks(@ApiParam Pageable pageable, @RequestParam MultiValueMap<String, String> parameters) {
        log.debug("REST request to get a page of Talks");
        Page<Talk> page;
        Boolean hasTitle = parameters.containsKey("title");
        Boolean hasSpeaker = parameters.containsKey("speaker");
        Boolean hasMinRating = parameters.containsKey("minRating");
        String title = '%' + parameters.getFirst("title") + '%';
        String speaker = '%' + parameters.getFirst("speaker") + '%';
        Float minRating = hasMinRating ? Float.parseFloat(parameters.getFirst("minRating")) : 0.0F;
// System.out.println("PARAMETERS: " + parameters);
// System.out.println("hasTitle: " + hasTitle);
// System.out.println("hasSpeaker: " + hasSpeaker);
// System.out.println("hasMinRating: " + hasMinRating);
        if(hasTitle && !hasSpeaker && !hasMinRating) {
            page = talkRepository.findByTitleLike(title, pageable);
        } else if(hasTitle && !hasSpeaker && hasMinRating) {
            page = talkRepository.findByTitleLikeAndRatingGreaterThan(title, minRating, pageable);
        } else if(hasTitle && hasSpeaker && !hasMinRating) {
            page = talkRepository.findByTitleLikeAndSpeakerLike(title, speaker, pageable);
        } else if(hasTitle && hasSpeaker && hasMinRating) {
            page = talkRepository.findByTitleLikeAndSpeakerLikeAndRatingGreaterThan(title, speaker, minRating, pageable);
        } else if(!hasTitle && hasSpeaker && !hasMinRating) {
            page = talkRepository.findBySpeakerLike(speaker, pageable);
        } else if(!hasTitle && hasSpeaker && hasMinRating) {
            page = talkRepository.findBySpeakerLikeAndRatingGreaterThan(speaker, minRating, pageable);
        } else if(!hasTitle && !hasSpeaker && hasMinRating) {
            page = talkRepository.findByRatingGreaterThan(minRating, pageable);
        } else {
            page = talkRepository.findAll(pageable);
        }
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/talks");

        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

    /**
     * GET  /talks/:id : get the "id" talk.
     *
     * @param id the id of the talk to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the talk, or with status 404 (Not Found)
     */
    @GetMapping("/talks/{id}")
    @Timed
    public ResponseEntity<Talk> getTalk(@PathVariable Long id) {
        log.debug("REST request to get Talk : {}", id);
        Talk talk = talkRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(talk));
    }

    /**
     * DELETE  /talks/:id : delete the "id" talk.
     *
     * @param id the id of the talk to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/talks/{id}")
    @Timed
    public ResponseEntity<Void> deleteTalk(@PathVariable Long id) {
        log.debug("REST request to delete Talk : {}", id);
        talkRepository.delete(id);
        talkSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/talks?query=:query : search for the talk corresponding
     * to the query.
     *
     * @param query the query of the talk search
     * @param pageable the pagination information
     * @return the result of the search
     */
    @GetMapping("/_search/talks")
    @Timed
    public ResponseEntity<List<Talk>> searchTalks(@RequestParam String query, @ApiParam Pageable pageable) {
        log.debug("REST request to search for a page of Talks for query {}", query);
        Page<Talk> page = talkSearchRepository.search(queryStringQuery(query), pageable);
        HttpHeaders headers = PaginationUtil.generateSearchPaginationHttpHeaders(query, page, "/api/_search/talks");
        return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);
    }

}
