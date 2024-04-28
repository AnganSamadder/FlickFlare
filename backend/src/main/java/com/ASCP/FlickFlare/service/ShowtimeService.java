package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Movie;
import com.ASCP.FlickFlare.model.Showtime;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ShowtimeService {
    void saveShowtime(Showtime show);
    Showtime getShowtime();
    List<Showtime> getAllShowtimesByMovie(Movie movie);
    List<Showtime> getAllShowtimesByDate(String date);
    void bookSeats(Showtime show);
}
