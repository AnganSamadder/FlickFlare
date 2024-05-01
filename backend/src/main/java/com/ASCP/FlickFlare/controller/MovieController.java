package com.ASCP.FlickFlare.controller;

import com.ASCP.FlickFlare.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ASCP.FlickFlare.model.Movie;

import java.util.List;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("/movie")
@AllArgsConstructor
public class MovieController {


    @Autowired
    public MovieService movieService;


    @PostMapping("/add")
    public String add(@RequestBody Movie movie) {
        movieService.saveMovie(movie);
        return "new movie added";
    }

    @GetMapping("/getAll")
    public List<Movie> get() throws ExecutionException, InterruptedException {
        return movieService.getAllMovies();
    }

    @GetMapping("/get")
    public Movie get(@RequestParam int id) throws ExecutionException, InterruptedException {
        return movieService.getMovie(id);
    }

    @PutMapping("/update")
    public String update(@RequestBody Movie movie) {
        movieService.saveMovie(movie);
        return "movie updated";
    }

    @PutMapping("/delete")
    public String delete(@RequestParam int id) {
        movieService.deleteMovie(id);
        return "movie deleted";
    }

    @GetMapping("/search")
    public List<Movie> search(@RequestParam String input) throws ExecutionException, InterruptedException {
        return movieService.searchMovies(input);
    }

    @GetMapping("/showing")
    public List<Movie> searchByShowing(@RequestParam boolean showing) throws ExecutionException, InterruptedException {
        return movieService.getShowingMovies(showing);
    }

    @GetMapping("/searchByGenre")
    public List<Movie> searchByGenre(@RequestParam String genre) throws ExecutionException, InterruptedException {
        return movieService.getMovieGenre(genre);
    }

    @GetMapping("/searchByDate")
    public List<Movie> searchByDate(@RequestParam long date) throws ExecutionException, InterruptedException {
        return movieService.getMoviesByShowtimeDate(date);
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test");
    }

}
