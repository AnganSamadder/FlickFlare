package com.ASCP.MovieBrowser.service;

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


}
