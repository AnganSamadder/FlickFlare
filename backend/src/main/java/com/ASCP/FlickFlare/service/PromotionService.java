package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Promotion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PromotionService {
    void savePromotion(Promotion promo);
    Promotion getPromotion();
    List<Promotion> getAllPromotions();

}
