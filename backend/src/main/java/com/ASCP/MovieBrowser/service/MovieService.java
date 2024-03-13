package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Movie;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public interface MovieService {

    public void saveMovie(Movie movie);

    public List<Movie> getAllMovies() throws ExecutionException, InterruptedException;

    public Movie getMovie(long id) throws ExecutionException, InterruptedException;

    public void deleteMovie(long id);

    public List<Movie> searchMovies(String input) throws ExecutionException, InterruptedException;

    public List<Movie> getShowingMovies(boolean showing) throws ExecutionException, InterruptedException;
}
