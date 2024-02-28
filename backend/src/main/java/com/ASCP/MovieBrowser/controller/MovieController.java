package com.ASCP.MovieBrowser.controller;

import com.ASCP.MovieBrowser.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ASCP.MovieBrowser.model.Movie;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("/movie")
@AllArgsConstructor
public class MovieController{

  @Autowired
  public MovieService movieService;


  @PostMapping("/add")
  public String add(@RequestBody Movie movie){
    movieService.saveMovie(movie);
    return "new movie added";
  }

  @GetMapping("/getAll")
  public ArrayList<Movie> get() throws ExecutionException, InterruptedException{
    return movieService.getAllMovies();
  }

  @GetMapping("/get")
  public Movie get(@RequestParam String id) throws ExecutionException, InterruptedException{
    return movieService.getMovie(id);
  }

  @PutMapping("/update")
  public String update(@RequestBody Movie movie){
    movieService.saveMovie(movie);
    return "movie updated";
  }

  @PutMapping("/delete")
  public String delete(@RequestParam String id){
    movieService.deleteMovie(id);
    return "movie deleted";
  }

  @GetMapping("/search")
  public ArrayList<Movie> search(@RequestParam String input) throws ExecutionException, InterruptedException{
    return movieService.searchMovies(input);
  }

  @GetMapping("/genre")
  public ArrayList<Movie> searchByGenre(@RequestParam String genre) throws ExecutionException, InterruptedException{
    return movieService.searchMoviesByGenre(genre);
  }

  @GetMapping("/showing")
  public ArrayList<Movie> searchByShowing(@RequestParam boolean showing) throws ExecutionException, InterruptedException{
    return movieService.searchMoviesByShowing(showing);
  }

  @GetMapping("/test")
  public ResponseEntity<String> test(){
    return ResponseEntity.ok("Test");
  }

}
