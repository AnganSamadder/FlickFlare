package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Movie;
import com.ASCP.FlickFlare.model.Showtime;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ShowtimeService {
    void saveShowtime(Showtime show);
    Showtime getShowtime(long id);
    List<Showtime> getAllShowtimesByMovie(long movieId);
    List<Showtime> getAllShowtimesByDate(long date);
    void bookSeat(long showId,String seatNum);
    void unBookSeat(long bookingId,String seatNum);
    List<Showtime> getAllShowtimesByMovieByDate(long movieId, long date);
}
