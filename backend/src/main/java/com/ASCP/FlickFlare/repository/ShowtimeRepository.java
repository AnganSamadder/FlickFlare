package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Movie;
import com.ASCP.FlickFlare.model.Showtime;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShowtimeRepository extends CrudRepository<Showtime, Long> {

    List<Showtime> findByDate(long date);
}
