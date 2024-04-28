package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Promotion;
import com.ASCP.FlickFlare.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.management.openmbean.ArrayType;
import java.util.ArrayList;
import java.util.List;

@Service
public class PromotionServiceImpl implements PromotionService{
    @Autowired
    private PromotionRepository promotionRepository;
    public void savePromotion(Promotion promo) {
        if(!promoExists(promo)) {
            promotionRepository.save(promo);
        }
    }
    public Promotion getPromotion(long id) {
        return promotionRepository.findById(id).isPresent() ? promotionRepository.findById(id).get() : null;
    }
    public List<Promotion> getAllPromotions() {
        List<Promotion> promotions = new ArrayList<>();
        promotionRepository.findAll().forEach(promotions::add);
        return promotions;
    }
    public boolean promoExists(Promotion promo) {
        for(Promotion existingPromotion : getAllPromotions()) {
            if(promo.getCode().equalsIgnoreCase(existingPromotion.getCode())) {
                return true;
            }
        }
        return false;
    }

    public String getPromoCode(Promotion promo) {
        return promo.getCode();
    }
}
