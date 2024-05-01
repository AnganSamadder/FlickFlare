package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Booking;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public interface BookingService {
    void saveBooking(Booking booking, long userId, long showId, String promoCode);
    Booking getBooking(long bookingId);
    Set<Booking> getAllBoookingsByUser(long userId);

    boolean isRefundable(long showtimeId);
}
