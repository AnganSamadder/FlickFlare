package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends CrudRepository<Address, Long> {

}
