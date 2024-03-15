package com.ASCP.MovieBrowser.repository;

import com.ASCP.MovieBrowser.model.Card;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends CrudRepository<Card, Long> {

}
