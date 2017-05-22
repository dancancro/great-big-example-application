package org.exampleapps.greatbig.web.rest;

import org.exampleapps.greatbig.GreatBigExampleApplicationApp;

import org.exampleapps.greatbig.domain.Note;
import org.exampleapps.greatbig.repository.NoteRepository;
import org.exampleapps.greatbig.repository.search.NoteSearchRepository;
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
 * Test class for the NoteResource REST controller.
 *
 * @see NoteResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GreatBigExampleApplicationApp.class)
public class NoteResourceIntTest {

    private static final String DEFAULT_ID = "Abc123";

    private static final String DEFAULT_TEXT = "AAAAAAAAAA";
    private static final String UPDATED_TEXT = "BBBBBBBBBB";

    private static final String DEFAULT_COLOUR = "AAAAAAAAAA";
    private static final String UPDATED_COLOUR = "BBBBBBBBBB";

    private static final Integer DEFAULT_LEFT = 1;
    private static final Integer UPDATED_LEFT = 2;

    private static final Integer DEFAULT_TOP = 1;
    private static final Integer UPDATED_TOP = 2;

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private NoteSearchRepository noteSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restNoteMockMvc;

    private Note note;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        NoteResource noteResource = new NoteResource(noteRepository, noteSearchRepository);
        this.restNoteMockMvc = MockMvcBuilders.standaloneSetup(noteResource)
                .setCustomArgumentResolvers(pageableArgumentResolver).setControllerAdvice(exceptionTranslator)
                .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Note createEntity(EntityManager em) {
        Note note = new Note().text(DEFAULT_TEXT).colour(DEFAULT_COLOUR).left(DEFAULT_LEFT).top(DEFAULT_TOP)
                .id(DEFAULT_ID);
        return note;
    }

    @Before
    public void initTest() {
        noteSearchRepository.deleteAll();
        note = createEntity(em);
    }

    @Test
    @Transactional
    public void createNote() throws Exception {
        int databaseSizeBeforeCreate = noteRepository.findAll().size();

        // Create the Note
        restNoteMockMvc.perform(post("/api/notes").contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(note))).andExpect(status().isCreated());

        // Validate the Note in the database
        List<Note> noteList = noteRepository.findAll();
        assertThat(noteList).hasSize(databaseSizeBeforeCreate + 1);
        Note testNote = noteList.get(noteList.size() - 1);
        assertThat(testNote.getText()).isEqualTo(DEFAULT_TEXT);
        assertThat(testNote.getId()).isEqualTo(DEFAULT_ID);
        assertThat(testNote.getColour()).isEqualTo(DEFAULT_COLOUR);
        assertThat(testNote.getLeft()).isEqualTo(DEFAULT_LEFT);
        assertThat(testNote.getTop()).isEqualTo(DEFAULT_TOP);

        // Validate the Note in Elasticsearch
        Note noteEs = noteSearchRepository.findOne(testNote.getId());
        assertThat(noteEs).isEqualToComparingFieldByField(testNote);
    }

    // This should test creation of a note with an existing ID, not
    // saving a note that has an ID
    //
    // @Test
    // @Transactional
    // public void createNoteWithExistingId() throws Exception {
    //     int databaseSizeBeforeCreate = noteRepository.findAll().size();

    //     // Create the Note with an existing ID
    //     note.setId(DEFAULT_ID);

    //     // An entity with an existing ID cannot be created, so this API call must fail
    //     restNoteMockMvc.perform(post("/api/notes").contentType(TestUtil.APPLICATION_JSON_UTF8)
    //             .content(TestUtil.convertObjectToJsonBytes(note))).andExpect(status().isBadRequest());

    //     // Validate the Alice in the database
    //     List<Note> noteList = noteRepository.findAll();
    //     assertThat(noteList).hasSize(databaseSizeBeforeCreate);
    // }

    @Test
    @Transactional
    public void getAllNotes() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        // Get all the noteList
        restNoteMockMvc.perform(get("/api/notes?sort=id,desc")).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.[*].id").value(hasItem(note.getId())))
                .andExpect(jsonPath("$.[*].text").value(hasItem(DEFAULT_TEXT.toString())))
                .andExpect(jsonPath("$.[*].colour").value(hasItem(DEFAULT_COLOUR.toString())))
                .andExpect(jsonPath("$.[*].left").value(hasItem(DEFAULT_LEFT)))
                .andExpect(jsonPath("$.[*].top").value(hasItem(DEFAULT_TOP)));
    }

    @Test
    @Transactional
    public void getNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);

        // Get the note
        restNoteMockMvc.perform(get("/api/notes/{id}", note.getId())).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id").value(note.getId()))
                .andExpect(jsonPath("$.text").value(DEFAULT_TEXT.toString()))
                .andExpect(jsonPath("$.colour").value(DEFAULT_COLOUR.toString()))
                .andExpect(jsonPath("$.left").value(DEFAULT_LEFT)).andExpect(jsonPath("$.top").value(DEFAULT_TOP));
    }

    @Test
    @Transactional
    public void getNonExistingNote() throws Exception {
        // Get the note
        restNoteMockMvc.perform(get("/api/notes/{id}", Long.MAX_VALUE)).andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);
        noteSearchRepository.save(note);
        int databaseSizeBeforeUpdate = noteRepository.findAll().size();

        // Update the note
        Note updatedNote = noteRepository.findOne(note.getId());
        updatedNote.text(UPDATED_TEXT).colour(UPDATED_COLOUR).left(UPDATED_LEFT).top(UPDATED_TOP);

        restNoteMockMvc.perform(put("/api/notes").contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(updatedNote))).andExpect(status().isOk());

        // Validate the Note in the database
        List<Note> noteList = noteRepository.findAll();
        assertThat(noteList).hasSize(databaseSizeBeforeUpdate);
        Note testNote = noteList.get(noteList.size() - 1);
        assertThat(testNote.getText()).isEqualTo(UPDATED_TEXT);
        assertThat(testNote.getColour()).isEqualTo(UPDATED_COLOUR);
        assertThat(testNote.getLeft()).isEqualTo(UPDATED_LEFT);
        assertThat(testNote.getTop()).isEqualTo(UPDATED_TOP);

        // Validate the Note in Elasticsearch
        Note noteEs = noteSearchRepository.findOne(testNote.getId());
        assertThat(noteEs).isEqualToComparingFieldByField(testNote);
    }

    // This isn't appropriate for entities without auto ids
    //
    // @Test
    // @Transactional
    // public void updateNonExistingNote() throws Exception {
    //     int databaseSizeBeforeUpdate = noteRepository.findAll().size();

    //     // Create the Note

    //     // If the entity doesn't have an ID, it will be created instead of just being updated
    //     restNoteMockMvc.perform(put("/api/notes").contentType(TestUtil.APPLICATION_JSON_UTF8)
    //             .content(TestUtil.convertObjectToJsonBytes(note))).andExpect(status().isCreated());

    //     // Validate the Note in the database
    //     List<Note> noteList = noteRepository.findAll();
    //     assertThat(noteList).hasSize(databaseSizeBeforeUpdate + 1);
    // }

    @Test
    @Transactional
    public void deleteNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);
        noteSearchRepository.save(note);
        int databaseSizeBeforeDelete = noteRepository.findAll().size();

        // Get the note
        restNoteMockMvc.perform(delete("/api/notes/{id}", note.getId()).accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean noteExistsInEs = noteSearchRepository.exists(note.getId());
        assertThat(noteExistsInEs).isFalse();

        // Validate the database is empty
        List<Note> noteList = noteRepository.findAll();
        assertThat(noteList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchNote() throws Exception {
        // Initialize the database
        noteRepository.saveAndFlush(note);
        noteSearchRepository.save(note);

        // Search the note
        restNoteMockMvc.perform(get("/api/_search/notes?query=id:" + note.getId())).andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.[*].id").value(hasItem(note.getId())))
                .andExpect(jsonPath("$.[*].text").value(hasItem(DEFAULT_TEXT.toString())))
                .andExpect(jsonPath("$.[*].colour").value(hasItem(DEFAULT_COLOUR.toString())))
                .andExpect(jsonPath("$.[*].left").value(hasItem(DEFAULT_LEFT)))
                .andExpect(jsonPath("$.[*].top").value(hasItem(DEFAULT_TOP)));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Note.class);
        Note note1 = new Note();
        note1.setId("A1");
        Note note2 = new Note();
        note2.setId(note1.getId());
        assertThat(note1).isEqualTo(note2);
        note2.setId("A2");
        assertThat(note1).isNotEqualTo(note2);
        note1.setId(null);
        assertThat(note1).isNotEqualTo(note2);
    }
}
