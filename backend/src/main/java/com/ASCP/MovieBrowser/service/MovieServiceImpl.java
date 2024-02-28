package com.ASCP.MovieBrowser.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import com.ASCP.MovieBrowser.model.Movie;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public class MovieServiceImpl implements MovieService{

  @Override
  public Movie saveMovie(Movie movie){

//        return movieRepository.save(movie);

    Firestore db = FirestoreClient.getFirestore();
    ApiFuture<WriteResult> result = db.collection("movie").document(movie.getTitle()).set(movie);
    return movie;


  }

  public ArrayList<Movie> getAllMovies() throws ExecutionException, InterruptedException{
    Firestore db = FirestoreClient.getFirestore();
    QuerySnapshot document = db.collection("movie").get().get();
    return new ArrayList<>(document.toObjects(Movie.class));
  }

  @Override
  public Movie getMovie(String id) throws ExecutionException, InterruptedException{
    Firestore db = FirestoreClient.getFirestore();
    DocumentSnapshot document = db.collection("movie").document(id).get().get();
    if(document.exists()){
      return document.toObject(Movie.class);
    }
    return null;
  }

  @Override
  public void deleteMovie(String id){
    Firestore db = FirestoreClient.getFirestore();
    ApiFuture<WriteResult> writeResult = db.collection("movie").document(id).delete();
  }

  @Override
  public ArrayList<Movie> searchMovies(String input) throws ExecutionException, InterruptedException{
    if(input.equals("")){
      return new ArrayList<>();
    }

    ArrayList<Movie> movies = getAllMovies();
    ArrayList<Movie> matchedMovies = new ArrayList<>();
    for(Movie movie : movies){
      if(movie.getTitle().toLowerCase().contains(input.toLowerCase())){
        matchedMovies.add(movie);
      }
    }
    return matchedMovies;
  }

  public ArrayList<Movie> searchMoviesByGenre(String input) throws ExecutionException, InterruptedException{
    if(input.isEmpty()){
      return new ArrayList<>();
    }

    ArrayList<Movie> movies = getAllMovies();
    ArrayList<Movie> matchedMovies = new ArrayList<>();
    for(Movie movie : movies){
      for(String genre : movie.getGenres()){
        if(genre.toLowerCase().contains(input.toLowerCase())){
          matchedMovies.add(movie);
          break;
        }
      }
    }
    return matchedMovies;
  }

  public ArrayList<Movie> searchMoviesByShowing(boolean showing) throws ExecutionException, InterruptedException{
    ArrayList<Movie> movies = getAllMovies();
    ArrayList<Movie> matchedMovies = new ArrayList<>();
    for(Movie movie : movies){
      if(movie.isNowShowing() == showing){
        matchedMovies.add(movie);
      }
    }
    return matchedMovies;
  }
}
