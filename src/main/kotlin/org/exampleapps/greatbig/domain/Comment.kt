package org.exampleapps.greatbig.domain

import org.hibernate.annotations.Cache
import org.hibernate.annotations.CacheConcurrencyStrategy
import org.springframework.data.elasticsearch.annotations.Document
import java.time.OffsetDateTime
import javax.persistence.*
import java.sql.Clob

@Entity
@Embeddable
@Table(name = "comment")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "comment")
data class Comment(

    @Column(name = "created_at")
    var createdAt: OffsetDateTime = OffsetDateTime.now(),

    @Column(name = "updated_at")
    var updatedAt: OffsetDateTime = OffsetDateTime.now(),

    @Lob
    @Column(name = "jhi_body", nullable = false)
    var body: String = "",

    @ManyToOne
    var article: Article = Article(),

    @ManyToOne
    var author: Author = Author(),

//    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    var id: Long = 0)
