package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Booking;
import org.springframework.stereotype.Service;

@Service
public interface BookingService {
    void saveBooking(Booking booking, long userId, long showId);
}
