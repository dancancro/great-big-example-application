package org.exampleapps.greatbig.config.elasticsearch;

import static java.lang.System.currentTimeMillis;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.data.elasticsearch.core.ElasticsearchTemplate;
import com.github.vanroy.springdata.jest.JestElasticsearchTemplate;
import org.springframework.stereotype.Component;

@Component
public class IndexReinitializer {

    private Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private JestElasticsearchTemplate elasticsearchTemplate;

    @PostConstruct
    public void resetIndex() {
        long t = currentTimeMillis();
        elasticsearchTemplate.deleteIndex("_all");
        t = currentTimeMillis() - t;
        logger.debug("Elasticsearch indexes reset in {} ms", t);
    }
}
