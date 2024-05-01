package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface BookingRepository extends CrudRepository<Booking, Long> {


}
