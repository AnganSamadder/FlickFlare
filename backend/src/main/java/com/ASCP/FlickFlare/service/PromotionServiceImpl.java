package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Promotion;
import com.ASCP.FlickFlare.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;

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
    public void deletePromotion(long id) {
        promotionRepository.deleteById(id);

    }

    public boolean verifyDate(long promoId){
        Promotion promo = null;
        LocalDate currentDate = LocalDate.now();
        if (promotionRepository.findById(promoId).isPresent()) {
            promo = promotionRepository.findById(promoId).get();
        } else {
            throw new NullPointerException("given Id promo doesnt exist");
        }
        if (currentDate.isAfter(LocalDate.parse(promo.getExpirationDate()))) {
            return false;
        }
        return true;

    }
}


