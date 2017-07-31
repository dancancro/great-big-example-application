package org.exampleapps.greatbig.web.rest;

import org.exampleapps.greatbig.GreatBigExampleApplicationApp;

import org.exampleapps.greatbig.domain.Hero;
import org.exampleapps.greatbig.repository.HeroRepository;
import org.exampleapps.greatbig.repository.search.HeroSearchRepository;
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
 * Test class for the HeroResource REST controller.
 *
 * @see HeroResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = GreatBigExampleApplicationApp.class)
public class HeroResourceIntTest {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    @Autowired
    private HeroRepository heroRepository;

    @Autowired
    private HeroSearchRepository heroSearchRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restHeroMockMvc;

    private Hero hero;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        HeroResource heroResource = new HeroResource(heroRepository, heroSearchRepository);
        this.restHeroMockMvc = MockMvcBuilders.standaloneSetup(heroResource)
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
    public static Hero createEntity(EntityManager em) {
        Hero hero = new Hero()
            .name(DEFAULT_NAME);
        return hero;
    }

    @Before
    public void initTest() {
        heroSearchRepository.deleteAll();
        hero = createEntity(em);
    }

    @Test
    @Transactional
    public void createHero() throws Exception {
        int databaseSizeBeforeCreate = heroRepository.findAll().size();

        // Create the Hero
        restHeroMockMvc.perform(post("/api/heroes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(hero)))
            .andExpect(status().isCreated());

        // Validate the Hero in the database
        List<Hero> heroList = heroRepository.findAll();
        assertThat(heroList).hasSize(databaseSizeBeforeCreate + 1);
        Hero testHero = heroList.get(heroList.size() - 1);
        assertThat(testHero.getName()).isEqualTo(DEFAULT_NAME);

        // Validate the Hero in Elasticsearch
        Hero heroEs = heroSearchRepository.findOne(testHero.getId());
        assertThat(heroEs).isEqualToComparingFieldByField(testHero);
    }

    @Test
    @Transactional
    public void createHeroWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = heroRepository.findAll().size();

        // Create the Hero with an existing ID
        hero.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restHeroMockMvc.perform(post("/api/heroes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(hero)))
            .andExpect(status().isBadRequest());

        // Validate the Alice in the database
        List<Hero> heroList = heroRepository.findAll();
        assertThat(heroList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void checkNameIsRequired() throws Exception {
        int databaseSizeBeforeTest = heroRepository.findAll().size();
        // set the field null
        hero.setName(null);

        // Create the Hero, which fails.

        restHeroMockMvc.perform(post("/api/heroes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(hero)))
            .andExpect(status().isBadRequest());

        List<Hero> heroList = heroRepository.findAll();
        assertThat(heroList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllHeroes() throws Exception {
        // Initialize the database
        heroRepository.saveAndFlush(hero);

        // Get all the heroList
        restHeroMockMvc.perform(get("/api/heroes?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(hero.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())));
    }

    @Test
    @Transactional
    public void getHero() throws Exception {
        // Initialize the database
        heroRepository.saveAndFlush(hero);

        // Get the hero
        restHeroMockMvc.perform(get("/api/heroes/{id}", hero.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(hero.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingHero() throws Exception {
        // Get the hero
        restHeroMockMvc.perform(get("/api/heroes/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateHero() throws Exception {
        // Initialize the database
        heroRepository.saveAndFlush(hero);
        heroSearchRepository.save(hero);
        int databaseSizeBeforeUpdate = heroRepository.findAll().size();

        // Update the hero
        Hero updatedHero = heroRepository.findOne(hero.getId());
        updatedHero
            .name(UPDATED_NAME);

        restHeroMockMvc.perform(put("/api/heroes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedHero)))
            .andExpect(status().isOk());

        // Validate the Hero in the database
        List<Hero> heroList = heroRepository.findAll();
        assertThat(heroList).hasSize(databaseSizeBeforeUpdate);
        Hero testHero = heroList.get(heroList.size() - 1);
        assertThat(testHero.getName()).isEqualTo(UPDATED_NAME);

        // Validate the Hero in Elasticsearch
        Hero heroEs = heroSearchRepository.findOne(testHero.getId());
        assertThat(heroEs).isEqualToComparingFieldByField(testHero);
    }

    @Test
    @Transactional
    public void updateNonExistingHero() throws Exception {
        int databaseSizeBeforeUpdate = heroRepository.findAll().size();

        // Create the Hero

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restHeroMockMvc.perform(put("/api/heroes")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(hero)))
            .andExpect(status().isCreated());

        // Validate the Hero in the database
        List<Hero> heroList = heroRepository.findAll();
        assertThat(heroList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteHero() throws Exception {
        // Initialize the database
        heroRepository.saveAndFlush(hero);
        heroSearchRepository.save(hero);
        int databaseSizeBeforeDelete = heroRepository.findAll().size();

        // Get the hero
        restHeroMockMvc.perform(delete("/api/heroes/{id}", hero.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate Elasticsearch is empty
        boolean heroExistsInEs = heroSearchRepository.exists(hero.getId());
        assertThat(heroExistsInEs).isFalse();

        // Validate the database is empty
        List<Hero> heroList = heroRepository.findAll();
        assertThat(heroList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void searchHero() throws Exception {
        // Initialize the database
        heroRepository.saveAndFlush(hero);
        heroSearchRepository.save(hero);

        // Search the hero
        restHeroMockMvc.perform(get("/api/_search/heroes?query=id:" + hero.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(hero.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())));
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Hero.class);
        Hero hero1 = new Hero();
        hero1.setId(1L);
        Hero hero2 = new Hero();
        hero2.setId(hero1.getId());
        assertThat(hero1).isEqualTo(hero2);
        hero2.setId(2L);
        assertThat(hero1).isNotEqualTo(hero2);
        hero1.setId(null);
        assertThat(hero1).isNotEqualTo(hero2);
    }
}
