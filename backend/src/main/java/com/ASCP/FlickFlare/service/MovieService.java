package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Movie;
import org.springframework.stereotype.Service;

import java.beans.IntrospectionException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public interface MovieService {

    void saveMovie(Movie movie);

    List<Movie> getAllMovies() throws ExecutionException, InterruptedException;

    Movie getMovie(long id) throws ExecutionException, InterruptedException;

    void deleteMovie(long id);

    List<Movie> searchMovies(String input) throws ExecutionException, InterruptedException;

    List<Movie> getShowingMovies(boolean showing) throws ExecutionException, InterruptedException;

    List<Movie> getMovieGenre(String genre) throws ExecutionException, InterruptedException;

    List<Movie> getMovieDate(String date) throws ExecutionException, InterruptedException;
}
