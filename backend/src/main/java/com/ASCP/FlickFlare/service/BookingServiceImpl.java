package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Booking;
import com.ASCP.FlickFlare.model.Promotion;
import com.ASCP.FlickFlare.model.Showtime;
import com.ASCP.FlickFlare.model.User;
import com.ASCP.FlickFlare.repository.*;
import com.ASCP.FlickFlare.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;


import java.util.Date;
import java.util.Set;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ShowtimeRepository showRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private PromotionRepository promoRepository;
    @Override
    public void saveBooking(Booking booking, long userId, long showId,String promoCode) {
        User user;
        Showtime show;
        if (userRepository.findById(userId).isPresent()) {
            user = userRepository.findById(userId).get();
        } else {
            throw new NullPointerException("Given userId doesn't exist");
        }
        if (showRepository.findById(showId).isPresent()) {
            show = showRepository.findById(showId).get();
        } else {
            throw new NullPointerException("Given showId doesn't exist");
        }
        for(Promotion existingPromotion : promoRepository.findAll()) {
            if(existingPromotion.getCode().equalsIgnoreCase(promoCode)) {
                booking.setBookPromotions(existingPromotion);
            }
        }if(promoCode.isBlank()) {
            booking.setBookPromotions(null);
        }

        booking.setBookingUser(user);
        booking.setBookedShowtime(show);
        bookingRepository.save(booking);
    }
    @Override
    public Booking getBooking(long bookingId) {
        Booking booking;
        if (bookingRepository.findById(bookingId).isPresent()) {
            booking = bookingRepository.findById(bookingId).get();
        } else {
            throw new NullPointerException("Given bookingId doesn't exist");
        }
        return booking;
    }


    @Override
    public Set<Booking> getAllBoookingsByUser(long userId) {
        User user;
        if(userRepository.findById(userId).isPresent()){
            user=userRepository.findById(userId).get();
        }else{
            throw new NullPointerException("given userId doesn't exist");
        }
        return user.getBookings();
    }

    @Override
    public boolean isRefundable(long showtimeId) {
        Showtime showtime;
        if (showRepository.findById(showtimeId).isPresent()) {
            showtime = showRepository.findById(showtimeId).get();
        } else {
            throw new NullPointerException("Given booking does not exist");
        }
        Date date = new Date();
        long currentDate = date.getTime();

        return showtime.getDate() <= currentDate;


    }


}
