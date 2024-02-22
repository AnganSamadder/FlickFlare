package com.ASCP.MovieBrowser.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ASCP.MovieBrowser.model.Movie;
import com.ASCP.MovieBrowser.repository.MovieRepository;

@Service
public class MovieServiceimpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public Movie saveMovie(Movie movie) {
      
        return movieRepository.save(movie);
    }

    @Override
    public List<Movie> getAllMovies() {

        return movieRepository.findAll();
        
    }


}
