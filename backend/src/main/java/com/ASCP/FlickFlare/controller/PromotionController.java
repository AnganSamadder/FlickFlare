package com.ASCP.FlickFlare.controller;
import com.ASCP.FlickFlare.model.Booking;
import com.ASCP.FlickFlare.model.Promotion;
import com.ASCP.FlickFlare.model.User;
import com.ASCP.FlickFlare.repository.PromotionRepository;
import com.ASCP.FlickFlare.repository.UserRepository;
import com.ASCP.FlickFlare.service.MovieService;
import com.ASCP.FlickFlare.service.PromotionService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ASCP.FlickFlare.model.Movie;
import java.time.LocalDate;

import java.util.List;
import java.util.concurrent.ExecutionException;
@CrossOrigin
@RestController
@RequestMapping("/movie")
@AllArgsConstructor
public class PromotionController {

    @Autowired
    public PromotionService promotionService;
    @Autowired
    public PromotionRepository promotionRepository;
    @Autowired
    public UserRepository userRepository;
    @PostMapping("/add")
    public String add(@RequestBody Promotion promotion) {
        promotionService.savePromotion(promotion);
        return "new promo added";
    }

    @GetMapping("/get")
    public Promotion get(@RequestParam int id) throws ExecutionException, InterruptedException {
        return promotionService.getPromotion(id);
    }

    @GetMapping("/getAll")
    public List<Promotion> get() throws ExecutionException, InterruptedException {
        return promotionService.getAllPromotions();
    }

    @PutMapping("/delete")
    public String delete(@RequestParam int id) {
        promotionService.deletePromotion(id);
        return "Promotion deleted...";
    }
    @PutMapping ("/editPromotions")
    public ResponseEntity<String> editPromotions(@RequestParam long id, @RequestParam String code, @RequestParam int percentageDiscount, @RequestParam String expirationDate) {

        Promotion editPromo = null;
        if(promotionRepository.findById(id).isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Promo with given id doesnt exist");
        } else {
            editPromo = promotionRepository.findById(id).get();
        }
        editPromo.setCode(code);
        editPromo.setExpirationDate(expirationDate);
        editPromo.setPercentageDiscount(percentageDiscount);

        return ResponseEntity.status(HttpStatus.OK).body("Promotion successfully updated");

    }
    @GetMapping("/validPromotion")
    public ResponseEntity<Boolean> validPromotion(@RequestParam String givenCode, @RequestParam long userId ) {
        long promoId = 0;
        User user = null;
        Promotion promotion;
        if(userRepository.findById(userId).isPresent()){
            user = userRepository.findById(userId).get();
        } else {
            throw new NullPointerException("User does not exist");
        }
        for(Promotion promo:promotionRepository.findAll()) {
            if(promo.getCode().equalsIgnoreCase(givenCode)) {
                promoId = promo.getPromotion_id();
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
            }
        }
        if(!promotionService.verifyDate(promoId)) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(false);
        }

        for(Booking booking : user.getBookings()) {
            if(promoId == booking.getBookPromotions().getPromotion_id()) {
                return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(false);
            }

        }
        return ResponseEntity.status(HttpStatus.OK).body(true);

    }

}
