package org.exampleapps.greatbig.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.exampleapps.greatbig.domain.Profile;
import org.exampleapps.greatbig.repository.ProfileRepository;
import org.exampleapps.greatbig.repository.search.ProfileSearchRepository;
import org.exampleapps.greatbig.web.rest.errors.BadRequestAlertException;
import org.exampleapps.greatbig.web.rest.util.HeaderUtil;
import org.exampleapps.greatbig.service.dto.ProfileDTO;
import org.exampleapps.greatbig.service.mapper.ProfileMapper;
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
 * REST controller for managing Profile.
 */
@RestController
@RequestMapping("/api")
public class ProfileResource {

    private final Logger log = LoggerFactory.getLogger(ProfileResource.class);

    private static final String ENTITY_NAME = "profile";

    private final ProfileRepository profileRepository;

    private final ProfileMapper profileMapper;

    private final ProfileSearchRepository profileSearchRepository;

    public ProfileResource(ProfileRepository profileRepository, ProfileMapper profileMapper, ProfileSearchRepository profileSearchRepository) {
        this.profileRepository = profileRepository;
        this.profileMapper = profileMapper;
        this.profileSearchRepository = profileSearchRepository;
    }

    /**
     * POST  /profiles : Create a new profile.
     *
     * @param profileDTO the profileDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new profileDTO, or with status 400 (Bad Request) if the profile has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/profiles")
    @Timed
    public ResponseEntity<ProfileDTO> createProfile(@RequestBody ProfileDTO profileDTO) throws URISyntaxException {
        log.debug("REST request to save Profile : {}", profileDTO);
        if (profileDTO.getId() != null) {
            throw new BadRequestAlertException("A new profile cannot already have an ID", ENTITY_NAME, "idexists");
        }

        Profile profile = profileMapper.toEntity(profileDTO);
        profile = profileRepository.save(profile);
        ProfileDTO result = profileMapper.toDto(profile);
        profileSearchRepository.save(profile);
        return ResponseEntity.created(new URI("/api/profiles/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /profiles : Updates an existing profile.
     *
     * @param profileDTO the profileDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated profileDTO,
     * or with status 400 (Bad Request) if the profileDTO is not valid,
     * or with status 500 (Internal Server Error) if the profileDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/profiles")
    @Timed
    public ResponseEntity<ProfileDTO> updateProfile(@RequestBody ProfileDTO profileDTO) throws URISyntaxException {
        log.debug("REST request to update Profile : {}", profileDTO);
        if (profileDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }

        Profile profile = profileMapper.toEntity(profileDTO);
        profile = profileRepository.save(profile);
        ProfileDTO result = profileMapper.toDto(profile);
        profileSearchRepository.save(profile);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, profileDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /profiles : get all the profiles.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of profiles in body
     */
    @GetMapping("/profiles")
    @Timed
    public List<ProfileDTO> getAllProfiles() {
        log.debug("REST request to get all Profiles");
        List<Profile> profiles = profileRepository.findAll();
        return profileMapper.toDto(profiles);
    }

    /**
     * GET  /profiles/:id : get the "id" profile.
     *
     * @param id the id of the profileDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the profileDTO, or with status 404 (Not Found)
     */
    @GetMapping("/profiles/{id}")
    @Timed
    public ResponseEntity<ProfileDTO> getProfile(@PathVariable Long id) {
        log.debug("REST request to get Profile : {}", id);
        Optional<ProfileDTO> profileDTO = profileRepository.findById(id)
            .map(profileMapper::toDto);
        return ResponseUtil.wrapOrNotFound(profileDTO);
    }

    /**
     * DELETE  /profiles/:id : delete the "id" profile.
     *
     * @param id the id of the profileDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/profiles/{id}")
    @Timed
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        log.debug("REST request to delete Profile : {}", id);

        profileRepository.deleteById(id);
        profileSearchRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/profiles?query=:query : search for the profile corresponding
     * to the query.
     *
     * @param query the query of the profile search
     * @return the result of the search
     */
    @GetMapping("/_search/profiles")
    @Timed
    public List<ProfileDTO> searchProfiles(@RequestParam String query) {
        log.debug("REST request to search Profiles for query {}", query);
        return StreamSupport
            .stream(profileSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .map(profileMapper::toDto)
            .collect(Collectors.toList());
    }

}
