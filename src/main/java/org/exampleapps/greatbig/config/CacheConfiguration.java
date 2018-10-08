package org.exampleapps.greatbig.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import io.github.jhipster.config.jcache.BeanClassLoaderAwareJCacheRegionFactory;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        BeanClassLoaderAwareJCacheRegionFactory.setBeanClassLoader(this.getClass().getClassLoader());
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(org.exampleapps.greatbig.repository.UserRepository.USERS_BY_LOGIN_CACHE, jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.repository.UserRepository.USERS_BY_EMAIL_CACHE, jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName() + ".comments", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName() + ".tags", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName() + ".favoriters", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Comment.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".articles", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".comments", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".followers", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".favorites", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".followees", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Profile.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Hero.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Crisis.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Claim.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Contact.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Note.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Rebuttal.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.ClaimRebuttal.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Tag.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Tag.class.getName() + ".articles", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Message.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".articles", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".comments", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".followers", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".followees", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Author.class.getName() + ".favorites", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName() + ".tags", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName() + ".favoriters", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Article.class.getName() + ".comments", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Comment.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Talk.class.getName(), jcacheConfiguration);
            // jhipster-needle-ehcache-add-entry
        };
    }
}
