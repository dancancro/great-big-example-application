package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Profile;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Profile entity.
 */
public interface ProfileSearchRepository extends ElasticsearchRepository<Profile, Long> {
}
