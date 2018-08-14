package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Claim;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Claim entity.
 */
public interface ClaimSearchRepository extends ElasticsearchRepository<Claim, Long> {
}
