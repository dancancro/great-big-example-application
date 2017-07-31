package org.exampleapps.greatbig.web.rest;

import org.exampleapps.greatbig.GreatBigExampleApplicationApp;

import org.exampleapps.greatbig.domain.Talk;
import org.exampleapps.greatbig.repository.TalkRepository;
import org.exampleapps.greatbig.repository.search.TalkSearchRepository;
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
import org.springframework.util.Base64Utils;

import javax.persistence.EntityManager;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the TalkResource REST controller.
 *
 * @see TalkResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GreatBigExampleApplicationApp.class)
public class TalkResourceIntTest {

    private static final String DEFAULT_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_TITLE = "BBBBBBBBBB";

    private static final String DEFAULT_SPEAKER = "AAAAAAAAAA";
    private static final String UPDATED_SPEAKER = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final Float DEFAULT_YOUR_RATING = 10F;
    private static final Float UPDATED_YOUR_RATING = 9F;

    private static final Float DEFAULT_RATING = 1F;
    private static final Float UPDATED_RATING = 2F;

    @Autowired
    private TalkRepository talkRepository;

    @Autowired
    private TalkSearchRepository talkSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restTalkMockMvc;

    private Talk talk;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        TalkResource talkResource = new TalkResource(talkRepository, talkSearchRepository);
        this.restTalkMockMvc = MockMvcBuilders.standaloneSetup(talkResource)
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
    public static Talk createEntity(EntityManager em) {
        Talk talk = new Talk()
            .title(DEFAULT_TITLE)
            .speaker(DEFAULT_SPEAKER)
            .description(DEFAULT_DESCRIPTION)
            .yourRating(DEFAULT_YOUR_RATING)
            .rating(DEFAULT_RATING);
        return talk;
    }

    @Before
    public void initTest() {
        talkSearchRepository.deleteAll();
        talk = createEntity(em);
    }

    @Test
    @Transactional
    public void createTalk() throws Exception {
        int databaseSizeBeforeCreate = talkRepository.findAll().size();

        // Create the Talk
        restTalkMockMvc.perform(post("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(talk)))
            .andExpect(status().isCreated());

        // Validate the Talk in the database
        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeCreate + 1);
        Talk testTalk = talkList.get(talkList.size() - 1);
        assertThat(testTalk.getTitle()).isEqualTo(DEFAULT_TITLE);
        assertThat(testTalk.getSpeaker()).isEqualTo(DEFAULT_SPEAKER);
        assertThat(testTalk.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testTalk.getYourRating()).isEqualTo(DEFAULT_YOUR_RATING);
        assertThat(testTalk.getRating()).isEqualTo(DEFAULT_RATING);

        // Validate the Talk in Elasticsearch
        Talk talkEs = talkSearchRepository.findOne(testTalk.getId());
        assertThat(talkEs).isEqualToComparingFieldByField(testTalk);
    }

    @Test
    @Transactional
    public void createTalkWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = talkRepository.findAll().size();

        // Create the Talk with an existing ID
        talk.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restTalkMockMvc.perform(post("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(talk)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkTitleIsRequired() throws Exception {
        int databaseSizeBeforeTest = talkRepository.findAll().size();
        // set the field null
        talk.setTitle(null);

        // Create the Talk, which fails.

        restTalkMockMvc.perform(post("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(talk)))
            .andExpect(status().isBadRequest());

        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkSpeakerIsRequired() throws Exception {
        int databaseSizeBeforeTest = talkRepository.findAll().size();
        // set the field null
        talk.setSpeaker(null);

        // Create the Talk, which fails.

        restTalkMockMvc.perform(post("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(talk)))
            .andExpect(status().isBadRequest());

        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void checkDescriptionIsRequired() throws Exception {
        int databaseSizeBeforeTest = talkRepository.findAll().size();
        // set the field null
        talk.setDescription(null);

        // Create the Talk, which fails.

        restTalkMockMvc.perform(post("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(talk)))
            .andExpect(status().isBadRequest());

        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getTalks() throws Exception {
        // Initialize the database
        talkRepository.saveAndFlush(talk);

        // Get all the talkList
        restTalkMockMvc.perform(get("/api/talks?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(talk.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE.toString())))
            .andExpect(jsonPath("$.[*].speaker").value(hasItem(DEFAULT_SPEAKER.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].yourRating").value(hasItem(DEFAULT_YOUR_RATING.doubleValue())))
            .andExpect(jsonPath("$.[*].rating").value(hasItem(DEFAULT_RATING.doubleValue())));
    }

    @Test
    @Transactional
    public void getTalk() throws Exception {
        // Initialize the database
        talkRepository.saveAndFlush(talk);

        // Get the talk
        restTalkMockMvc.perform(get("/api/talks/{id}", talk.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(talk.getId().intValue()))
            .andExpect(jsonPath("$.title").value(DEFAULT_TITLE.toString()))
            .andExpect(jsonPath("$.speaker").value(DEFAULT_SPEAKER.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.yourRating").value(DEFAULT_YOUR_RATING.doubleValue()))
            .andExpect(jsonPath("$.rating").value(DEFAULT_RATING.doubleValue()));
    }

    @Test
    @Transactional
    public void getNonExistingTalk() throws Exception {
        // Get the talk
        restTalkMockMvc.perform(get("/api/talks/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateTalk() throws Exception {
        // Initialize the database
        talkRepository.saveAndFlush(talk);
        talkSearchRepository.save(talk);
        int databaseSizeBeforeUpdate = talkRepository.findAll().size();

        // Update the talk
        Talk updatedTalk = talkRepository.findOne(talk.getId());
        updatedTalk
            .title(UPDATED_TITLE)
            .speaker(UPDATED_SPEAKER)
            .description(UPDATED_DESCRIPTION)
            .yourRating(UPDATED_YOUR_RATING)
            .rating(UPDATED_RATING);

        restTalkMockMvc.perform(put("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedTalk)))
            .andExpect(status().isOk());

        // Validate the Talk in the database
        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeUpdate);
        Talk testTalk = talkList.get(talkList.size() - 1);
        assertThat(testTalk.getTitle()).isEqualTo(UPDATED_TITLE);
        assertThat(testTalk.getSpeaker()).isEqualTo(UPDATED_SPEAKER);
        assertThat(testTalk.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testTalk.getYourRating()).isEqualTo(UPDATED_YOUR_RATING);
        assertThat(testTalk.getRating()).isEqualTo(UPDATED_RATING);

        // Validate the Talk in Elasticsearch
        Talk talkEs = talkSearchRepository.findOne(testTalk.getId());
        assertThat(talkEs).isEqualToComparingFieldByField(testTalk);
    }

    @Test
    @Transactional
    public void updateNonExistingTalk() throws Exception {
        int databaseSizeBeforeUpdate = talkRepository.findAll().size();

        // Create the Talk

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restTalkMockMvc.perform(put("/api/talks")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(talk)))
            .andExpect(status().isCreated());

        // Validate the Talk in the database
        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteTalk() throws Exception {
        // Initialize the database
        talkRepository.saveAndFlush(talk);
        talkSearchRepository.save(talk);
        int databaseSizeBeforeDelete = talkRepository.findAll().size();

        // Get the talk
        restTalkMockMvc.perform(delete("/api/talks/{id}", talk.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean talkExistsInEs = talkSearchRepository.exists(talk.getId());
        assertThat(talkExistsInEs).isFalse();

        // Validate the database is empty
        List<Talk> talkList = talkRepository.findAll();
        assertThat(talkList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchTalk() throws Exception {
        // Initialize the database
        talkRepository.saveAndFlush(talk);
        talkSearchRepository.save(talk);

        // Search the talk
        restTalkMockMvc.perform(get("/api/_search/talks?query=id:" + talk.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(talk.getId().intValue())))
            .andExpect(jsonPath("$.[*].title").value(hasItem(DEFAULT_TITLE.toString())))
            .andExpect(jsonPath("$.[*].speaker").value(hasItem(DEFAULT_SPEAKER.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].yourRating").value(hasItem(DEFAULT_YOUR_RATING.doubleValue())))
            .andExpect(jsonPath("$.[*].rating").value(hasItem(DEFAULT_RATING.doubleValue())));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Talk.class);
        Talk talk1 = new Talk();
        talk1.setId(1L);
        Talk talk2 = new Talk();
        talk2.setId(talk1.getId());
        assertThat(talk1).isEqualTo(talk2);
        talk2.setId(2L);
        assertThat(talk1).isNotEqualTo(talk2);
        talk1.setId(null);
        assertThat(talk1).isNotEqualTo(talk2);
    }
}
