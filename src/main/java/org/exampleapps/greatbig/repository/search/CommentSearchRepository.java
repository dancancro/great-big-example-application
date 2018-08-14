package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Comment;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Comment entity.
 */
public interface CommentSearchRepository extends ElasticsearchRepository<Comment, Long> {
}
