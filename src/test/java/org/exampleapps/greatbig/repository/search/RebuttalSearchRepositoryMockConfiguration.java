package org.exampleapps.greatbig.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of RebuttalSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class RebuttalSearchRepositoryMockConfiguration {

    @MockBean
    private RebuttalSearchRepository mockRebuttalSearchRepository;

}
