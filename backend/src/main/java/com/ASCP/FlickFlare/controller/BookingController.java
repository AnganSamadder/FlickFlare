package com.ASCP.FlickFlare.controller;

import com.ASCP.FlickFlare.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    BookingService bookingService;
}
