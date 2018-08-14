package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Author;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Author entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
    @Query("select distinct author from Author author left join fetch author.followers left join fetch author.favorites")
    List<Author> findAllWithEagerRelationships();

    @Query("select author from Author author left join fetch author.followers left join fetch author.favorites where author.id =:id")
    Author findOneWithEagerRelationships(@Param("id") Long id);

}
