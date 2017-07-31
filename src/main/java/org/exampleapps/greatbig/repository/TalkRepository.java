package org.exampleapps.greatbig.repository;

import org.exampleapps.greatbig.domain.Talk;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


/**
 * Spring Data JPA repository for the Talk entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TalkRepository extends JpaRepository<Talk,Long> {

    Talk findById(Long id);
    Page<Talk> findByTitleLike(String title, Pageable pageable);
    Page<Talk> findByTitleLikeAndSpeakerLike(String title, String speaker, Pageable pageable);
    Page<Talk> findByTitleLikeAndRatingGreaterThan(String title, Float ratingGreaterThan, Pageable pageable);
    Page<Talk> findByTitleLikeAndSpeakerLikeAndRatingGreaterThan(String title, String speaker, Float ratingGreaterThan, Pageable pageable);
    Page<Talk> findBySpeakerLike(String speaker, Pageable pageable);
    Page<Talk> findBySpeakerLikeAndRatingGreaterThan(String speaker, Float ratingGreaterThan, Pageable pageable);
    Page<Talk> findByRatingGreaterThan(Float ratingGreaterThan, Pageable pageable);
}
