package com.ASCP.MovieBrowser;

import java.io.File;
import java.util.ArrayList;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Movie {

    @Id
    @GeneratedValue
    private long movieUID;
    private String movieName;
    private String movieDescription;
    private String movieShowtime;
    private String movieDate;
    private boolean isUpcoming;
    private boolean isNowShowing;
    private File moviePoster;
    private String movieTrailerLink; 
    private String movieCategory;
    private String movieProducer;
    @ElementCollection
    private ArrayList<String> movieCastList;
    private String synopsis;
    private String mpaaCode;
    @ElementCollection
    private ArrayList<String> movieReviews;
}
