package com.ASCP.MovieBrowser.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ASCP.MovieBrowser.model.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Integer> {

}
