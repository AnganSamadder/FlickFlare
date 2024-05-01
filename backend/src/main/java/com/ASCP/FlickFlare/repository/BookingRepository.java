package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {

}
