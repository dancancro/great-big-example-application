package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Hero;

import org.exampleapps.greatbig.repository.HeroRepository;
import org.exampleapps.greatbig.repository.search.HeroSearchRepository;
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
 * REST controller for managing Hero.
 */
@RestController
@RequestMapping("/api")
public class HeroResource {

    private final Logger log = LoggerFactory.getLogger(HeroResource.class);

    private static final String ENTITY_NAME = "hero";

    private final HeroRepository heroRepository;

    private final HeroSearchRepository heroSearchRepository;

    public HeroResource(HeroRepository heroRepository, HeroSearchRepository heroSearchRepository) {
        this.heroRepository = heroRepository;
        this.heroSearchRepository = heroSearchRepository;
    }

    /**
     * POST  /heroes : Create a new hero.
     *
     * @param hero the hero to create
     * @return the ResponseEntity with status 201 (Created) and with body the new hero, or with status 400 (Bad Request) if the hero has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/heroes")
    @Timed
    public ResponseEntity<Hero> createHero(@Valid @RequestBody Hero hero) throws URISyntaxException {
        log.debug("REST request to save Hero : {}", hero);
        if (hero.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert(ENTITY_NAME, "idexists", "A new hero cannot already have an ID")).body(null);
        }
        Hero result = heroRepository.save(hero);
        heroSearchRepository.save(result);
        return ResponseEntity.created(new URI("/api/heroes/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /heroes : Updates an existing hero.
     *
     * @param hero the hero to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated hero,
     * or with status 400 (Bad Request) if the hero is not valid,
     * or with status 500 (Internal Server Error) if the hero couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/heroes")
    @Timed
    public ResponseEntity<Hero> updateHero(@Valid @RequestBody Hero hero) throws URISyntaxException {
        log.debug("REST request to update Hero : {}", hero);
        if (hero.getId() == null) {
            return createHero(hero);
        }
        Hero result = heroRepository.save(hero);
        heroSearchRepository.save(result);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, hero.getId().toString()))
            .body(result);
    }

    /**
     * GET  /heroes : get all the heroes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of heroes in body
     */
    @GetMapping("/heroes")
    @Timed
    public List<Hero> getAllHeroes() {
        log.debug("REST request to get all Heroes");
        return heroRepository.findAll();
    }

    /**
     * GET  /heroes/:id : get the "id" hero.
     *
     * @param id the id of the hero to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the hero, or with status 404 (Not Found)
     */
    @GetMapping("/heroes/{id}")
    @Timed
    public ResponseEntity<Hero> getHero(@PathVariable Long id) {
        log.debug("REST request to get Hero : {}", id);
        Hero hero = heroRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(hero));
    }

    /**
     * DELETE  /heroes/:id : delete the "id" hero.
     *
     * @param id the id of the hero to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/heroes/{id}")
    @Timed
    public ResponseEntity<Void> deleteHero(@PathVariable Long id) {
        log.debug("REST request to delete Hero : {}", id);
        heroRepository.delete(id);
        heroSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/heroes?query=:query : search for the hero corresponding
     * to the query.
     *
     * @param query the query of the hero search
     * @return the result of the search
     */
    @GetMapping("/_search/heroes")
    @Timed
    public List<Hero> searchHeroes(@RequestParam String query) {
        log.debug("REST request to search Heroes for query {}", query);
        return StreamSupport
            .stream(heroSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .collect(Collectors.toList());
    }

}
