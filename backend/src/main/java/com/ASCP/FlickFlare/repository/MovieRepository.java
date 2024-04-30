package com.ASCP.FlickFlare.repository;

import org.springframework.data.repository.CrudRepository;

import com.ASCP.FlickFlare.model.Movie;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
    List<Movie> findByTitleContainingIgnoreCase(String input);

    List<Movie> findByShowing(boolean showing);

    List<Movie> findByDateContainingIgnoreCase(String input);

    List<Movie> findByGenreContainingIgnoreCase(String genre);
}
