package com.ASCP.FlickFlare.controller;

import com.ASCP.FlickFlare.model.Booking;
import com.ASCP.FlickFlare.model.User;
import com.ASCP.FlickFlare.repository.BookingRepository;
import com.ASCP.FlickFlare.repository.ShowtimeRepository;
import com.ASCP.FlickFlare.repository.UserRepository;
import com.ASCP.FlickFlare.service.BookingService;
import com.ASCP.FlickFlare.service.ShowtimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    ShowtimeRepository showtimeRepository;
    @Autowired
    BookingService bookingService;
    @Autowired
    ShowtimeService showtimeService;
    @PostMapping("/book")
    public ResponseEntity<String> addBooking(@RequestBody Booking booking,@RequestParam String promoCode,@RequestParam long userId,@RequestParam long showtimeId) {
        bookingService.saveBooking(booking, userId, showtimeId, promoCode);
        showtimeService.bookSeat(showtimeId, booking.getSeats());
        return ResponseEntity.status(HttpStatus.OK).body("Booking successfully added");
    }
    @GetMapping("/getOrderHistory")
    public ResponseEntity<List<Booking>> getOrderHistory (@RequestParam long userId) {
        User user = null;
        ArrayList<Booking> bookingList = new ArrayList<Booking>();
        if(userRepository.findById(userId).isPresent()) {
            user = userRepository.findById(userId).get();
        }
        for (Booking booking : bookingRepository.findAll()) {
            if(booking.getBookingUser()==user) {
                bookingList.add(booking);
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(bookingList);


    }
    @GetMapping("/refundTicket")
    public ResponseEntity<String> refundTicket(@RequestParam long bookingId) {
        Booking booking;
        if(bookingRepository.findById(bookingId).isPresent()) {
            booking = bookingRepository.findById(bookingId).get();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("booking not found");
        }

        booking.setBookingStatus(false);
        return ResponseEntity.status(HttpStatus.OK).body("refunded");
    }
}
