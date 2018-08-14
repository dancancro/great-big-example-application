package org.exampleapps.greatbig.repository.search;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Configuration;

/**
 * Configure a Mock version of TalkSearchRepository to test the
 * application without starting Elasticsearch.
 */
@Configuration
public class TalkSearchRepositoryMockConfiguration {

    @MockBean
    private TalkSearchRepository mockTalkSearchRepository;

}
