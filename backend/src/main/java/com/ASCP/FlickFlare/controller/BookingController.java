package com.ASCP.FlickFlare.controller;

import com.ASCP.FlickFlare.model.Booking;
import com.ASCP.FlickFlare.model.User;
import com.ASCP.FlickFlare.repository.BookingRepository;
import com.ASCP.FlickFlare.repository.UserRepository;
import com.ASCP.FlickFlare.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/getOrderHistory")
    public ResponseEntity<Set<Booking>> getOrderHistory (@RequestParam long userId) {
        User user = null;
        if(userRepository.findById(userId).isPresent()) {
            user = userRepository.findById(userId).get();
        }
        Set<Booking> bookings = user.getBookings();

        return ResponseEntity.status(HttpStatus.OK).body(bookings);

    }
    @GetMapping("/refundTicket")
    public ResponseEntity<String> refundTicket(@RequestParam long bookingId) {
        Booking booking;
        if(bookingRepository.findById(bookingId).isPresent()) {
            booking = bookingRepository.findById(bookingId).get();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("booking not found");
        }

        booking.setBookingStatus(true);
        return ResponseEntity.status(HttpStatus.OK).body("refunded");
    }
}
