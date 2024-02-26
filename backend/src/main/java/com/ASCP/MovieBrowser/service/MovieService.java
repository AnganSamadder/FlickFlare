package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Movie;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public interface MovieService{

  public Movie saveMovie(Movie movie);

  public ArrayList<Movie> getAllMovies() throws ExecutionException, InterruptedException;

  public Movie getMovie(String id) throws ExecutionException, InterruptedException;

  public void deleteMovie(String id);
}
