package org.exampleapps.greatbig.web.rest;

import org.exampleapps.greatbig.GreatBigExampleApplicationApp;

import org.exampleapps.greatbig.domain.ClaimRebuttal;
import org.exampleapps.greatbig.repository.ClaimRebuttalRepository;
import org.exampleapps.greatbig.repository.search.ClaimRebuttalSearchRepository;
import org.exampleapps.greatbig.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the ClaimRebuttalResource REST controller.
 *
 * @see ClaimRebuttalResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GreatBigExampleApplicationApp.class)
public class ClaimRebuttalResourceIntTest {

    private static final Long DEFAULT_CLAIM_ID = 1L;
    private static final Long UPDATED_CLAIM_ID = 2L;

    private static final Long DEFAULT_REBUTTAL_ID = 1L;
    private static final Long UPDATED_REBUTTAL_ID = 2L;

    private static final Integer DEFAULT_SORT_ORDER = 1;
    private static final Integer UPDATED_SORT_ORDER = 2;

    @Autowired
    private ClaimRebuttalRepository claimRebuttalRepository;

    @Autowired
    private ClaimRebuttalSearchRepository claimRebuttalSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restClaimRebuttalMockMvc;

    private ClaimRebuttal claimRebuttal;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        ClaimRebuttalResource claimRebuttalResource = new ClaimRebuttalResource(claimRebuttalRepository, claimRebuttalSearchRepository);
        this.restClaimRebuttalMockMvc = MockMvcBuilders.standaloneSetup(claimRebuttalResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ClaimRebuttal createEntity(EntityManager em) {
        ClaimRebuttal claimRebuttal = new ClaimRebuttal()
            .claimId(DEFAULT_CLAIM_ID)
            .rebuttalId(DEFAULT_REBUTTAL_ID)
            .sortOrder(DEFAULT_SORT_ORDER);
        return claimRebuttal;
    }

    @Before
    public void initTest() {
        claimRebuttalSearchRepository.deleteAll();
        claimRebuttal = createEntity(em);
    }

    @Test
    @Transactional
    public void createClaimRebuttal() throws Exception {
        int databaseSizeBeforeCreate = claimRebuttalRepository.findAll().size();

        // Create the ClaimRebuttal
        restClaimRebuttalMockMvc.perform(post("/api/claim-rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(claimRebuttal)))
            .andExpect(status().isCreated());

        // Validate the ClaimRebuttal in the database
        List<ClaimRebuttal> claimRebuttalList = claimRebuttalRepository.findAll();
        assertThat(claimRebuttalList).hasSize(databaseSizeBeforeCreate + 1);
        ClaimRebuttal testClaimRebuttal = claimRebuttalList.get(claimRebuttalList.size() - 1);
        assertThat(testClaimRebuttal.getClaimId()).isEqualTo(DEFAULT_CLAIM_ID);
        assertThat(testClaimRebuttal.getRebuttalId()).isEqualTo(DEFAULT_REBUTTAL_ID);
        assertThat(testClaimRebuttal.getSortOrder()).isEqualTo(DEFAULT_SORT_ORDER);

        // Validate the ClaimRebuttal in Elasticsearch
        ClaimRebuttal claimRebuttalEs = claimRebuttalSearchRepository.findOne(testClaimRebuttal.getId());
        assertThat(claimRebuttalEs).isEqualToComparingFieldByField(testClaimRebuttal);
    }

    @Test
    @Transactional
    public void createClaimRebuttalWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = claimRebuttalRepository.findAll().size();

        // Create the ClaimRebuttal with an existing ID
        claimRebuttal.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restClaimRebuttalMockMvc.perform(post("/api/claim-rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(claimRebuttal)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<ClaimRebuttal> claimRebuttalList = claimRebuttalRepository.findAll();
        assertThat(claimRebuttalList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllClaimRebuttals() throws Exception {
        // Initialize the database
        claimRebuttalRepository.saveAndFlush(claimRebuttal);

        // Get all the claimRebuttalList
        restClaimRebuttalMockMvc.perform(get("/api/claim-rebuttals?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(claimRebuttal.getId().intValue())))
            .andExpect(jsonPath("$.[*].claimId").value(hasItem(DEFAULT_CLAIM_ID.intValue())))
            .andExpect(jsonPath("$.[*].rebuttalId").value(hasItem(DEFAULT_REBUTTAL_ID.intValue())))
            .andExpect(jsonPath("$.[*].sortOrder").value(hasItem(DEFAULT_SORT_ORDER)));
    }

    @Test
    @Transactional
    public void getClaimRebuttal() throws Exception {
        // Initialize the database
        claimRebuttalRepository.saveAndFlush(claimRebuttal);

        // Get the claimRebuttal
        restClaimRebuttalMockMvc.perform(get("/api/claim-rebuttals/{id}", claimRebuttal.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(claimRebuttal.getId().intValue()))
            .andExpect(jsonPath("$.claimId").value(DEFAULT_CLAIM_ID.intValue()))
            .andExpect(jsonPath("$.rebuttalId").value(DEFAULT_REBUTTAL_ID.intValue()))
            .andExpect(jsonPath("$.sortOrder").value(DEFAULT_SORT_ORDER));
    }

    @Test
    @Transactional
    public void getNonExistingClaimRebuttal() throws Exception {
        // Get the claimRebuttal
        restClaimRebuttalMockMvc.perform(get("/api/claim-rebuttals/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateClaimRebuttal() throws Exception {
        // Initialize the database
        claimRebuttalRepository.saveAndFlush(claimRebuttal);
        claimRebuttalSearchRepository.save(claimRebuttal);
        int databaseSizeBeforeUpdate = claimRebuttalRepository.findAll().size();

        // Update the claimRebuttal
        ClaimRebuttal updatedClaimRebuttal = claimRebuttalRepository.findOne(claimRebuttal.getId());
        updatedClaimRebuttal
            .claimId(UPDATED_CLAIM_ID)
            .rebuttalId(UPDATED_REBUTTAL_ID)
            .sortOrder(UPDATED_SORT_ORDER);

        restClaimRebuttalMockMvc.perform(put("/api/claim-rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedClaimRebuttal)))
            .andExpect(status().isOk());

        // Validate the ClaimRebuttal in the database
        List<ClaimRebuttal> claimRebuttalList = claimRebuttalRepository.findAll();
        assertThat(claimRebuttalList).hasSize(databaseSizeBeforeUpdate);
        ClaimRebuttal testClaimRebuttal = claimRebuttalList.get(claimRebuttalList.size() - 1);
        assertThat(testClaimRebuttal.getClaimId()).isEqualTo(UPDATED_CLAIM_ID);
        assertThat(testClaimRebuttal.getRebuttalId()).isEqualTo(UPDATED_REBUTTAL_ID);
        assertThat(testClaimRebuttal.getSortOrder()).isEqualTo(UPDATED_SORT_ORDER);

        // Validate the ClaimRebuttal in Elasticsearch
        ClaimRebuttal claimRebuttalEs = claimRebuttalSearchRepository.findOne(testClaimRebuttal.getId());
        assertThat(claimRebuttalEs).isEqualToComparingFieldByField(testClaimRebuttal);
    }

    @Test
    @Transactional
    public void updateNonExistingClaimRebuttal() throws Exception {
        int databaseSizeBeforeUpdate = claimRebuttalRepository.findAll().size();

        // Create the ClaimRebuttal

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restClaimRebuttalMockMvc.perform(put("/api/claim-rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(claimRebuttal)))
            .andExpect(status().isCreated());

        // Validate the ClaimRebuttal in the database
        List<ClaimRebuttal> claimRebuttalList = claimRebuttalRepository.findAll();
        assertThat(claimRebuttalList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteClaimRebuttal() throws Exception {
        // Initialize the database
        claimRebuttalRepository.saveAndFlush(claimRebuttal);
        claimRebuttalSearchRepository.save(claimRebuttal);
        int databaseSizeBeforeDelete = claimRebuttalRepository.findAll().size();

        // Get the claimRebuttal
        restClaimRebuttalMockMvc.perform(delete("/api/claim-rebuttals/{id}", claimRebuttal.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean claimRebuttalExistsInEs = claimRebuttalSearchRepository.exists(claimRebuttal.getId());
        assertThat(claimRebuttalExistsInEs).isFalse();

        // Validate the database is empty
        List<ClaimRebuttal> claimRebuttalList = claimRebuttalRepository.findAll();
        assertThat(claimRebuttalList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchClaimRebuttal() throws Exception {
        // Initialize the database
        claimRebuttalRepository.saveAndFlush(claimRebuttal);
        claimRebuttalSearchRepository.save(claimRebuttal);

        // Search the claimRebuttal
        restClaimRebuttalMockMvc.perform(get("/api/_search/claim-rebuttals?query=id:" + claimRebuttal.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(claimRebuttal.getId().intValue())))
            .andExpect(jsonPath("$.[*].claimId").value(hasItem(DEFAULT_CLAIM_ID.intValue())))
            .andExpect(jsonPath("$.[*].rebuttalId").value(hasItem(DEFAULT_REBUTTAL_ID.intValue())))
            .andExpect(jsonPath("$.[*].sortOrder").value(hasItem(DEFAULT_SORT_ORDER)));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ClaimRebuttal.class);
        ClaimRebuttal claimRebuttal1 = new ClaimRebuttal();
        claimRebuttal1.setId(1L);
        ClaimRebuttal claimRebuttal2 = new ClaimRebuttal();
        claimRebuttal2.setId(claimRebuttal1.getId());
        assertThat(claimRebuttal1).isEqualTo(claimRebuttal2);
        claimRebuttal2.setId(2L);
        assertThat(claimRebuttal1).isNotEqualTo(claimRebuttal2);
        claimRebuttal1.setId(null);
        assertThat(claimRebuttal1).isNotEqualTo(claimRebuttal2);
    }
}
