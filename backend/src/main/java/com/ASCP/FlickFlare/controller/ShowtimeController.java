package com.ASCP.FlickFlare.controller;

import com.ASCP.FlickFlare.model.Showtime;
import com.ASCP.FlickFlare.service.ShowtimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/showtime")
public class ShowtimeController {
    @Autowired
    ShowtimeService showtimeService;

    @PostMapping("/add")
    public ResponseEntity<String> addShowtime(@RequestBody Showtime show,@RequestParam long movieId){
        try {
            showtimeService.saveShowtime(show,movieId);
        } catch (NullPointerException e) {
            throw new RuntimeException("Given movieId doesn't exist");
        }
        return ResponseEntity.status(HttpStatus.OK).body("Showtime Added");
    }
    @GetMapping("/get")
    public ResponseEntity<List<Showtime>> getShowtimesByMovie(@RequestParam long movieId){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(showtimeService.getAllShowtimesByMovie(movieId));
        }catch(NullPointerException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}