package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.ClaimRebuttal;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the ClaimRebuttal entity.
 */
public interface ClaimRebuttalSearchRepository extends ElasticsearchRepository<ClaimRebuttal, Long> {
}
