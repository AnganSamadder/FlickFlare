package com.ASCP.MovieBrowser.service;

import org.springframework.stereotype.Service;
import com.ASCP.MovieBrowser.model.Movie;

@Service
public interface MovieService {

    public Movie saveMovie(Movie movie);
    
}
