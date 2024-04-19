package com.ASCP.MovieBrowser.repository;

import com.ASCP.MovieBrowser.model.Address;
import com.ASCP.MovieBrowser.model.MovieShowtime;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieShowtimeRepository extends CrudRepository<MovieShowtime, Long> {

}
