package org.exampleapps.greatbig.domain

import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.*

@Entity
@Table(name = "tag")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "tag")
data class Tag(val name: String = "",
            //    @Id @GeneratedValue(strategy = GenerationType.AUTO)
               @Id
               @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
               @SequenceGenerator(name = "sequenceGenerator")
               @JsonIgnore
               var id: Long = 0)
