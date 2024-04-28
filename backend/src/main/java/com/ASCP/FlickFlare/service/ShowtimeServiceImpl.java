package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Movie;
import com.ASCP.FlickFlare.model.Showtime;
import com.ASCP.FlickFlare.repository.MovieRepository;
import com.ASCP.FlickFlare.repository.ShowtimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ShowtimeServiceImpl implements ShowtimeService{

    @Autowired
    private ShowtimeRepository ShowtimeRepository;
    @Autowired
    private MovieRepository MovieRepository;
    @Override
    public void saveShowtime(Showtime show) {
        ShowtimeRepository.save(show);
    }

    @Override
    public Showtime getShowtime(long id) {
        Showtime show;
        if(ShowtimeRepository.findById(id).isPresent()){
            show=ShowtimeRepository.findById(id).get();
        }else{
            return null;
        }
        return show;
    }


    @Override
    public List<Showtime> getAllShowtimesByMovie(long movieId) {
        Movie movie;
        if(MovieRepository.findById(movieId).isPresent()){
            movie = MovieRepository.findById(movieId).get();
        }else{
            return null;
        }
        List<Showtime> showtimes = movie.getShowtimes();
        return showtimes;
    }

    @Override
    public List<Showtime> getAllShowtimesByDate(String date) {//String date is of the form mmddyy
        List<Showtime> showtimes=new ArrayList<>();
        for(Showtime show : ShowtimeRepository.findAll()){
            if(show.getDate()==date){
                showtimes.add(show);
            }
        }
        return showtimes;
    }

    @Override
    public void bookSeat(long showId,String seatNum) {
        Showtime show;
        if(ShowtimeRepository.findById(showId).isPresent()){
            show=ShowtimeRepository.findById(showId).get();
        }else{
            throw new NullPointerException();
        }
        StringBuilder seats = new StringBuilder();
        seats.append(show.getBookedSeats());
        seats.append(", "+seatNum);
        show.setBookedSeats(seats.toString());
    }
}
