package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {

}
