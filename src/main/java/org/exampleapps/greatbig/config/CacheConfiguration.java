package org.exampleapps.greatbig.config;

import io.github.jhipster.config.JHipsterProperties;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;
import org.ehcache.expiry.Duration;
import org.ehcache.expiry.Expirations;
import org.ehcache.jsr107.Eh107Configuration;

import java.util.concurrent.TimeUnit;

import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
@AutoConfigureAfter(value = { MetricsConfiguration.class })
@AutoConfigureBefore(value = { WebConfigurer.class, DatabaseConfiguration.class })
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(Expirations.timeToLiveExpiration(Duration.of(ehcache.getTimeToLiveSeconds(), TimeUnit.SECONDS)))
                .build());
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache(org.exampleapps.greatbig.domain.User.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.User.class.getName() + ".authorities", jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.Authority.class.getName(), jcacheConfiguration);
            cm.createCache(org.exampleapps.greatbig.domain.SocialUserConnection.class.getName(), jcacheConfiguration);
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
