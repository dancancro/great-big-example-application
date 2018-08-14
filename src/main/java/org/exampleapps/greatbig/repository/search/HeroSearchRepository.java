package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Hero;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Hero entity.
 */
public interface HeroSearchRepository extends ElasticsearchRepository<Hero, Long> {
}
