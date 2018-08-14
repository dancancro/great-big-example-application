package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Rebuttal;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Rebuttal entity.
 */
public interface RebuttalSearchRepository extends ElasticsearchRepository<Rebuttal, Long> {
}
