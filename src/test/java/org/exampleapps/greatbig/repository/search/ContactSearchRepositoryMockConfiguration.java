package org.exampleapps.greatbig.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of ContactSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class ContactSearchRepositoryMockConfiguration {

    @MockBean
    private ContactSearchRepository mockContactSearchRepository;

}
