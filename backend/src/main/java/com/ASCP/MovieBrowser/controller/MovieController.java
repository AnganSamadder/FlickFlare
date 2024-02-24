package com.ASCP.MovieBrowser.controller;

import com.ASCP.MovieBrowser.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ASCP.MovieBrowser.model.Movie;

import java.util.concurrent.ExecutionException;

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

    @GetMapping("/get")
    public Movie get(@RequestParam String id) throws ExecutionException, InterruptedException{
        return movieService.getMovie(id);
    }

    @PutMapping("/update")
    public String update(@RequestBody Movie movie) {
        movieService.saveMovie(movie);
        return "movie updated";
    }

    @PutMapping("/delete")
    public String delete(@RequestParam String id) {
        movieService.deleteMovie(id);
        return "movie deleted";
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("Test");
    }

}
