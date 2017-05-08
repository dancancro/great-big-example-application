package org.exampleapps.greatbig.repository.search;

import org.exampleapps.greatbig.domain.Note;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Note entity.
 */
public interface NoteSearchRepository extends ElasticsearchRepository<Note, String> {
}
