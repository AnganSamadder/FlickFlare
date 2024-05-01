package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Booking;
import com.ASCP.FlickFlare.model.Movie;
import com.ASCP.FlickFlare.model.Showtime;
import com.ASCP.FlickFlare.repository.BookingRepository;
import com.ASCP.FlickFlare.repository.MovieRepository;
import com.ASCP.FlickFlare.repository.ShowtimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ShowtimeServiceImpl implements ShowtimeService {

    @Autowired
    private ShowtimeRepository showtimeRepository;
    @Autowired
    private MovieRepository movieRepository;
    private BookingRepository bookingRepository;

    @Override
    public void saveShowtime(Showtime show) {
        showtimeRepository.save(show);
    }

    @Override
    public Showtime getShowtime(long id) {
        Showtime show;
        if (showtimeRepository.findById(id).isPresent()) {
            show = showtimeRepository.findById(id).get();
        } else {
            return null;
        }
        return show;
    }


    @Override
    public List<Showtime> getAllShowtimesByMovie(long movieId) throws NullPointerException {
        Movie movie;
        if (movieRepository.findById(movieId).isPresent()) {
            movie = movieRepository.findById(movieId).get();
        } else {
            throw new NullPointerException("Given movieId doesn't exist");
        }
        List<Showtime> showtimes = movie.getShowtimes();
        return showtimes;
    }

    @Override
    public List<Showtime> getAllShowtimesByDate(long date) {//String date is of the form yyyy-mm-dd
        List<Showtime> showtimes = new ArrayList<>();
        for (Showtime show : showtimeRepository.findAll()) {
            if (date == show.getDate()) {
                showtimes.add(show);
            }
        }
        return showtimes;
    }
    @Override
    public void bookSeat(long showId, String seatNum) throws NullPointerException {
        Showtime show;
        if (showtimeRepository.findById(showId).isPresent()) {
            show = showtimeRepository.findById(showId).get();
        } else {
            throw new NullPointerException("Given showId doesn't exist");
        }
        StringBuilder seats = new StringBuilder();
        seats.append(show.getBookedSeats());
        seats.append(", ").append(seatNum);
        show.setBookedSeats(seats.toString());
    }

    @Override
    public void unBookSeat(long bookingId, String seatNum) throws NullPointerException{
        if(!bookingRepository.findById(bookingId).isPresent()){
            throw new NullPointerException("given bookingId doesn't exist");
        }
        Booking booking=bookingRepository.findById(bookingId).get();
        Showtime show = booking.getBookedShowtime();
        StringBuilder seats = new StringBuilder();
        seats.append(show.getBookedSeats());
        int idx = seats.indexOf(seatNum);
        if(idx==1){
            seats.delete(0,5);
        }else{
            seats.delete(idx-2,idx+3);
        }
        show.setBookedSeats(seats.toString());
        showtimeRepository.save(show);
    }

    @Override
    public List<Showtime> getAllShowtimesByMovieByDate(long movieId, long date) throws NullPointerException, DateTimeParseException {//Date format yyyy-mm-dd
        List<Showtime> showtimes = null;
            showtimes = getAllShowtimesByMovie(movieId);
        List<Showtime> shows = new ArrayList<>();
        Date date1 = new Date();
        long currentDate = date1.getTime();
        for (Showtime show : showtimes) {
            if (currentDate == show.getDate()) {
                shows.add(show);
            }
        }
        return shows;
    }

}