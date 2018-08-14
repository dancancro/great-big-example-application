package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Crisis;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Crisis entity.
 */
public interface CrisisSearchRepository extends ElasticsearchRepository<Crisis, Long> {
}
