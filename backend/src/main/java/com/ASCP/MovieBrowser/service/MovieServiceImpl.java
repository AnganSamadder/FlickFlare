package com.ASCP.MovieBrowser.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import com.ASCP.MovieBrowser.model.Movie;

import java.util.concurrent.ExecutionException;

@Service
public class MovieServiceImpl implements MovieService {
   
    @Override
    public Movie saveMovie(Movie movie) {
        
//        return movieRepository.save(movie);

        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> result = db.collection("movie").document(movie.getTitle()).set(movie);
        return movie;


}

    @Override
    public Movie getMovie(String id) throws ExecutionException, InterruptedException{
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection("movie").document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get();
        if (document.exists()) {
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
