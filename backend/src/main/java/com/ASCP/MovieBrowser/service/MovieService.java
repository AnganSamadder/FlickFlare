package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Movie;
import org.springframework.stereotype.Service;

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
}
