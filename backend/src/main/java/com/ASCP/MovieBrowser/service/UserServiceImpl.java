package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.repository.CardRepository;
import com.ASCP.MovieBrowser.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CardRepository cardRepository;

    @Override
    public boolean emailExists(User user) {
        String email = user.getEmail();
        for (User existingUser : userRepository.findAll()) {
            if (email.equalsIgnoreCase(existingUser.getEmail())) {
                return true;
            }
        }
        return false;
    }

    public void saveUser(User user) {

        cardRepository.saveAll(user.getCards());

        userRepository.save(user);
    }

    public User getUser(long id) {
        if (userRepository.findById(id).isPresent()) {
            return userRepository.findById(id).get();
        }
        return null;
    }

    public Set<Card> getCards(long id) {
        User user = getUser(id);
        return user.getCards();
    }
}
