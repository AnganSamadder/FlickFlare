package com.ASCP.MovieBrowser.repository;

import com.ASCP.MovieBrowser.model.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends CrudRepository<Address, Long> {

}
