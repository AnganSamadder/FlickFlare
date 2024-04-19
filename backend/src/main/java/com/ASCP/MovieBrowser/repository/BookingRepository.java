package com.ASCP.MovieBrowser.repository;

import com.ASCP.MovieBrowser.model.Address;
import com.ASCP.MovieBrowser.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {

}
