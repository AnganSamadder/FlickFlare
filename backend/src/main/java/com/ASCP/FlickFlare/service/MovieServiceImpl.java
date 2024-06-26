package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.*;
import com.ASCP.FlickFlare.repository.ActorRepository;
import com.ASCP.FlickFlare.repository.GenreRepository;
import com.ASCP.FlickFlare.repository.MovieRepository;

import com.ASCP.FlickFlare.repository.ShowtimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private GenreRepository genreRepository;
    @Autowired
    private ActorRepository actorRepository;
    @Autowired
    private ShowtimeRepository showtimeRepository;


    @Override
    public void saveMovie(Movie movie) {

        for (MovieReview review : movie.getReviews()) {
            review.setMovie(movie);
        }

        for (Genre genre : movie.getGenres()) {
            Optional<Genre> existingGenre = genreRepository.findByGenre(genre.getGenre());
            if (existingGenre.isPresent()) {
                genre.setId(existingGenre.get().getId());
                genreRepository.save(genre);
            } else {
                genreRepository.save(genre);
            }
        }

        for (Actor actor : movie.getCast()) {
            Optional<Actor> existingActor = actorRepository.findByActor(actor.getActor());
            if (existingActor.isPresent()) {
                actor.setId(existingActor.get().getId());
                actorRepository.save(actor);
            } else {
                actorRepository.save(actor);
            }
        }

        movieRepository.save(movie);
        for (Showtime showtime : movie.getShowtimes()) {
            showtime.setMovie(movie);
        }
        showtimeRepository.saveAll(movie.getShowtimes());
    }

    @Override
    public List<Movie> getAllMovies() {
        List<Movie> movies = new ArrayList<>();
        movieRepository.findAll().forEach(movies::add);
        return movies;
    }

    @Override
    public Movie getMovie(long id) throws ExecutionException, InterruptedException {
        return movieRepository.findById(id).isPresent() ? movieRepository.findById(id).get() : null;
    }

    @Override
    public void deleteMovie(long id) {
        movieRepository.deleteById(id);
    }

    @Override
    public List<Movie> searchMovies(String input) throws ExecutionException, InterruptedException {
        if (input.isEmpty()) {
            return new ArrayList<>();
        }

        return movieRepository.findByTitleContainingIgnoreCase(input);
    }

    @Override
    public List<Movie> getShowingMovies(boolean showing) throws ExecutionException, InterruptedException {
        return movieRepository.findByShowing(showing);
    }

    @Override
    public List<Movie> getMovieGenre(String genre) throws ExecutionException, InterruptedException {
        Genre gen = null;
        if(genreRepository.findByGenre(genre).isPresent()){
            gen=genreRepository.findByGenre(genre).get();
        }else{
            throw new NullPointerException("Genre doesn't exist");
        }
        return movieRepository.findByGenresContainingIgnoreCase(gen);
    }

    @Override
    public List<Movie> getMoviesByShowtimeDate(long date) throws ExecutionException, InterruptedException {
        List<Movie> movies=new ArrayList<>();
        for(Showtime show : showtimeRepository.findByDate(date)){
            movies.add(show.getMovie());
        }
        return movies;
    }
}
