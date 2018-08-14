package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Tag;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Tag entity.
 */
public interface TagSearchRepository extends ElasticsearchRepository<Tag, Long> {
}
