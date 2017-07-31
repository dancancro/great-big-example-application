package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Talk;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Talk entity.
 */
public interface TalkSearchRepository extends ElasticsearchRepository<Talk, Long> {
}
