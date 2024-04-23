package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Address;
import com.ASCP.FlickFlare.model.Promotion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionRepository extends CrudRepository<Promotion, Long> {

}
