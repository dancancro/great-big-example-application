package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Message;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Message entity.
 */
public interface MessageSearchRepository extends ElasticsearchRepository<Message, Long> {
}
