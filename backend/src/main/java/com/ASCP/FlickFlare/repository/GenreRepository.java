package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Genre;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GenreRepository extends CrudRepository<Genre, Long> {
    Optional<Genre> findByGenre(String genre);
}
