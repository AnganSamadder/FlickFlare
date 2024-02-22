package com.ASCP.MovieBrowser.model;

import java.io.File;
import java.util.ArrayList;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Entity
@Data
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String title;
    private String description;
    @ElementCollection
    private ArrayList<String> showtimes;
    private String releaseDate;
    private boolean isUpcoming;
    private boolean isNowShowing;
    private File poster;
    private String trailerLink;
    private String genre;
    private String director;
    private String producer;
    @ElementCollection
    private ArrayList<String> castList;
    private String synopsis;
    private String mpaaCode;
    @ElementCollection
    private ArrayList<String> reviews;

}
