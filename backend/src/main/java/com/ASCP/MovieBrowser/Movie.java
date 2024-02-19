package com.ASCP.MovieBrowser;

import java.io.File;
import java.util.ArrayList;

public class Movie {
    
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
    private ArrayList<String> movieCastList;
    private String synopsis;
    private String mpaaCode;
    private ArrayList<String> movieReviews;


    public String getMovieName() {
        return movieName;
    }

    public String getMovieDescription() {
        return movieDescription;
    }

    public String getMovieShowtime() {
        return movieShowtime;
    }

    public String getMovieDate() {
        return movieDate;
    }

    public boolean isUpcoming() {
        return isUpcoming;
    }

    public boolean isNowShowing() {
        return isNowShowing;
    }

    public File getMoviePoster() {
        return moviePoster;
    }

    public String getMovieTrailerLink() {
        return movieTrailerLink;
    }

    public String getMovieCategory() {
        return movieCategory;
    }

    public String getMovieProducer() {
        return movieProducer;
    }

    public ArrayList<String> getMovieCastList() {
        return movieCastList;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public String getMpaaCode() {
        return mpaaCode;
    }

    public ArrayList<String> getMovieReviews() {
        return movieReviews;
    }

    // Setters
    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public void setMovieDescription(String movieDescription) {
        this.movieDescription = movieDescription;
    }

    public void setMovieShowtime(String movieShowtime) {
        this.movieShowtime = movieShowtime;
    }

    public void setMovieDate(String movieDate) {
        this.movieDate = movieDate;
    }

    public void setUpcoming(boolean isUpcoming) {
        this.isUpcoming = isUpcoming;
    }

    public void setNowShowing(boolean isNowShowing) {
        this.isNowShowing = isNowShowing;
    }

    public void setMoviePoster(File moviePoster) {
        this.moviePoster = moviePoster;
    }

    public void setMovieTrailerLink(String movieTrailerLink) {
        this.movieTrailerLink = movieTrailerLink;
    }

    public void setMovieCategory(String movieCategory) {
        this.movieCategory = movieCategory;
    }

    public void setMovieProducer(String movieProducer) {
        this.movieProducer = movieProducer;
    }

    public void setMovieCastList(ArrayList<String> movieCastList) {
        this.movieCastList = movieCastList;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public void setMpaaCode(String mpaaCode) {
        this.mpaaCode = mpaaCode;
    }

    public void setMovieReviews(ArrayList<String> movieReviews) {
        this.movieReviews = movieReviews;
    }
    
}
