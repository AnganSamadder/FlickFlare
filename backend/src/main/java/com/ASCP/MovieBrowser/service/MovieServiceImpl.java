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
}
