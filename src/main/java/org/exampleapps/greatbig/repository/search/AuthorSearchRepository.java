package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Author;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Author entity.
 */
public interface AuthorSearchRepository extends ElasticsearchRepository<Author, Long> {
}
