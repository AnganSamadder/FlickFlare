package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import model.Movie;
import service.MovieService;

@RestController
@RequestMapping("/Movie")
public class MovieController {

    @Autowired
    private MovieService movieService;


    @PostMapping("/add")
    public String add(@RequestBody Movie movie) {
        movieService.saveMovie(movie);
        return "new movie added";
    }

}
