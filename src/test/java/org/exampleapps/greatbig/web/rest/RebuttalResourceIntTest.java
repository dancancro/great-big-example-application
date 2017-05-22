package org.exampleapps.greatbig.web.rest;

import org.exampleapps.greatbig.GreatBigExampleApplicationApp;

import org.exampleapps.greatbig.domain.Rebuttal;
import org.exampleapps.greatbig.repository.RebuttalRepository;
import org.exampleapps.greatbig.repository.search.RebuttalSearchRepository;
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
import java.time.Instant;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.ZoneId;
import java.util.List;

import static org.exampleapps.greatbig.web.rest.TestUtil.sameInstant;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the RebuttalResource REST controller.
 *
 * @see RebuttalResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GreatBigExampleApplicationApp.class)
public class RebuttalResourceIntTest {

    private static final String DEFAULT_LONG_NAME = "AAAAAAAAAAAAAAAAAAAA";
    private static final String UPDATED_LONG_NAME = "BBBBBBBBBBBBBBBBBBBB";

    private static final String DEFAULT_SHORT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_SHORT_NAME = "BBBBBBBBBB";

    private static final ZonedDateTime DEFAULT_DATE = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_DATE = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_EXPIRES = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_EXPIRES = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String DEFAULT_LINK = "AAAAAAAAAA";
    private static final String UPDATED_LINK = "BBBBBBBBBB";

    @Autowired
    private RebuttalRepository rebuttalRepository;

    @Autowired
    private RebuttalSearchRepository rebuttalSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restRebuttalMockMvc;

    private Rebuttal rebuttal;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        RebuttalResource rebuttalResource = new RebuttalResource(rebuttalRepository, rebuttalSearchRepository);
        this.restRebuttalMockMvc = MockMvcBuilders.standaloneSetup(rebuttalResource)
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
    public static Rebuttal createEntity(EntityManager em) {
        Rebuttal rebuttal = new Rebuttal()
            .longName(DEFAULT_LONG_NAME)
            .shortName(DEFAULT_SHORT_NAME)
            .date(DEFAULT_DATE)
            .expires(DEFAULT_EXPIRES)
            .link(DEFAULT_LINK);
        return rebuttal;
    }

    @Before
    public void initTest() {
        rebuttalSearchRepository.deleteAll();
        rebuttal = createEntity(em);
    }

    @Test
    @Transactional
    public void createRebuttal() throws Exception {
        int databaseSizeBeforeCreate = rebuttalRepository.findAll().size();

        // Create the Rebuttal
        restRebuttalMockMvc.perform(post("/api/rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(rebuttal)))
            .andExpect(status().isCreated());

        // Validate the Rebuttal in the database
        List<Rebuttal> rebuttalList = rebuttalRepository.findAll();
        assertThat(rebuttalList).hasSize(databaseSizeBeforeCreate + 1);
        Rebuttal testRebuttal = rebuttalList.get(rebuttalList.size() - 1);
        assertThat(testRebuttal.getLongName()).isEqualTo(DEFAULT_LONG_NAME);
        assertThat(testRebuttal.getShortName()).isEqualTo(DEFAULT_SHORT_NAME);
        assertThat(testRebuttal.getDate()).isEqualTo(DEFAULT_DATE);
        assertThat(testRebuttal.getExpires()).isEqualTo(DEFAULT_EXPIRES);
        assertThat(testRebuttal.getLink()).isEqualTo(DEFAULT_LINK);

        // Validate the Rebuttal in Elasticsearch
        Rebuttal rebuttalEs = rebuttalSearchRepository.findOne(testRebuttal.getId());
        assertThat(rebuttalEs).isEqualToComparingFieldByField(testRebuttal);
    }

    @Test
    @Transactional
    public void createRebuttalWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = rebuttalRepository.findAll().size();

        // Create the Rebuttal with an existing ID
        rebuttal.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restRebuttalMockMvc.perform(post("/api/rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(rebuttal)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Rebuttal> rebuttalList = rebuttalRepository.findAll();
        assertThat(rebuttalList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllRebuttals() throws Exception {
        // Initialize the database
        rebuttalRepository.saveAndFlush(rebuttal);

        // Get all the rebuttalList
        restRebuttalMockMvc.perform(get("/api/rebuttals?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(rebuttal.getId().intValue())))
            .andExpect(jsonPath("$.[*].longName").value(hasItem(DEFAULT_LONG_NAME.toString())))
            .andExpect(jsonPath("$.[*].shortName").value(hasItem(DEFAULT_SHORT_NAME.toString())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(sameInstant(DEFAULT_DATE))))
            .andExpect(jsonPath("$.[*].expires").value(hasItem(sameInstant(DEFAULT_EXPIRES))))
            .andExpect(jsonPath("$.[*].link").value(hasItem(DEFAULT_LINK.toString())));
    }

    @Test
    @Transactional
    public void getRebuttal() throws Exception {
        // Initialize the database
        rebuttalRepository.saveAndFlush(rebuttal);

        // Get the rebuttal
        restRebuttalMockMvc.perform(get("/api/rebuttals/{id}", rebuttal.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(rebuttal.getId().intValue()))
            .andExpect(jsonPath("$.longName").value(DEFAULT_LONG_NAME.toString()))
            .andExpect(jsonPath("$.shortName").value(DEFAULT_SHORT_NAME.toString()))
            .andExpect(jsonPath("$.date").value(sameInstant(DEFAULT_DATE)))
            .andExpect(jsonPath("$.expires").value(sameInstant(DEFAULT_EXPIRES)))
            .andExpect(jsonPath("$.link").value(DEFAULT_LINK.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingRebuttal() throws Exception {
        // Get the rebuttal
        restRebuttalMockMvc.perform(get("/api/rebuttals/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateRebuttal() throws Exception {
        // Initialize the database
        rebuttalRepository.saveAndFlush(rebuttal);
        rebuttalSearchRepository.save(rebuttal);
        int databaseSizeBeforeUpdate = rebuttalRepository.findAll().size();

        // Update the rebuttal
        Rebuttal updatedRebuttal = rebuttalRepository.findOne(rebuttal.getId());
        updatedRebuttal
            .longName(UPDATED_LONG_NAME)
            .shortName(UPDATED_SHORT_NAME)
            .date(UPDATED_DATE)
            .expires(UPDATED_EXPIRES)
            .link(UPDATED_LINK);

        restRebuttalMockMvc.perform(put("/api/rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedRebuttal)))
            .andExpect(status().isOk());

        // Validate the Rebuttal in the database
        List<Rebuttal> rebuttalList = rebuttalRepository.findAll();
        assertThat(rebuttalList).hasSize(databaseSizeBeforeUpdate);
        Rebuttal testRebuttal = rebuttalList.get(rebuttalList.size() - 1);
        assertThat(testRebuttal.getLongName()).isEqualTo(UPDATED_LONG_NAME);
        assertThat(testRebuttal.getShortName()).isEqualTo(UPDATED_SHORT_NAME);
        assertThat(testRebuttal.getDate()).isEqualTo(UPDATED_DATE);
        assertThat(testRebuttal.getExpires()).isEqualTo(UPDATED_EXPIRES);
        assertThat(testRebuttal.getLink()).isEqualTo(UPDATED_LINK);

        // Validate the Rebuttal in Elasticsearch
        Rebuttal rebuttalEs = rebuttalSearchRepository.findOne(testRebuttal.getId());
        assertThat(rebuttalEs).isEqualToComparingFieldByField(testRebuttal);
    }

    @Test
    @Transactional
    public void updateNonExistingRebuttal() throws Exception {
        int databaseSizeBeforeUpdate = rebuttalRepository.findAll().size();

        // Create the Rebuttal

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restRebuttalMockMvc.perform(put("/api/rebuttals")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(rebuttal)))
            .andExpect(status().isCreated());

        // Validate the Rebuttal in the database
        List<Rebuttal> rebuttalList = rebuttalRepository.findAll();
        assertThat(rebuttalList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteRebuttal() throws Exception {
        // Initialize the database
        rebuttalRepository.saveAndFlush(rebuttal);
        rebuttalSearchRepository.save(rebuttal);
        int databaseSizeBeforeDelete = rebuttalRepository.findAll().size();

        // Get the rebuttal
        restRebuttalMockMvc.perform(delete("/api/rebuttals/{id}", rebuttal.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean rebuttalExistsInEs = rebuttalSearchRepository.exists(rebuttal.getId());
        assertThat(rebuttalExistsInEs).isFalse();

        // Validate the database is empty
        List<Rebuttal> rebuttalList = rebuttalRepository.findAll();
        assertThat(rebuttalList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchRebuttal() throws Exception {
        // Initialize the database
        rebuttalRepository.saveAndFlush(rebuttal);
        rebuttalSearchRepository.save(rebuttal);

        // Search the rebuttal
        restRebuttalMockMvc.perform(get("/api/_search/rebuttals?query=id:" + rebuttal.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(rebuttal.getId().intValue())))
            .andExpect(jsonPath("$.[*].longName").value(hasItem(DEFAULT_LONG_NAME.toString())))
            .andExpect(jsonPath("$.[*].shortName").value(hasItem(DEFAULT_SHORT_NAME.toString())))
            .andExpect(jsonPath("$.[*].date").value(hasItem(sameInstant(DEFAULT_DATE))))
            .andExpect(jsonPath("$.[*].expires").value(hasItem(sameInstant(DEFAULT_EXPIRES))))
            .andExpect(jsonPath("$.[*].link").value(hasItem(DEFAULT_LINK.toString())));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Rebuttal.class);
        Rebuttal rebuttal1 = new Rebuttal();
        rebuttal1.setId(1L);
        Rebuttal rebuttal2 = new Rebuttal();
        rebuttal2.setId(rebuttal1.getId());
        assertThat(rebuttal1).isEqualTo(rebuttal2);
        rebuttal2.setId(2L);
        assertThat(rebuttal1).isNotEqualTo(rebuttal2);
        rebuttal1.setId(null);
        assertThat(rebuttal1).isNotEqualTo(rebuttal2);
    }
}
