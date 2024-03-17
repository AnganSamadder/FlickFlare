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
    UserService userService;


    @Override
    public boolean emailExists(String email) {
        for (User existingUser : userRepository.findAll()) {
            if (email.equalsIgnoreCase(existingUser.getEmail())) {
                return true;
            }
        }
        return false;
    }
    public boolean validateCreds(User user, String inputPwd, String decrytpedPwd){

        if(user!=null){

            if(inputPwd.equals(decrytpedPwd)){
                return true;
            }else{
                return false;
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

    public String encrypt(String encryptionString) {

        final int key = 7;
        String encryptedString = "";
        StringBuilder encryptedStringBuilder = new StringBuilder();

        for (int i = 0; i < encryptionString.length(); i++) {
            char character = encryptionString.charAt(i);
            int asciiValue = (int) character;

            if(i == 0) {
                asciiValue = asciiValue + 1;

            }
            else {
                asciiValue = asciiValue - i - key;

            }
            char encryptedChar = (char) asciiValue;
            encryptedStringBuilder.append(encryptedChar);

        }

          return encryptedStringBuilder.toString();
    }

    public String decrypt(String encryptedString) {
        final int key = 7;
        StringBuilder decryptedStringBuilder = new StringBuilder();

        for (int i = 0; i < encryptedString.length(); i++) {
            char character = encryptedString.charAt(i);
            int asciiValue = (int) character;

            if(i == 0) {
                asciiValue = asciiValue - 1; // Reverse the encryption operation for the first character
            }
            else {
                asciiValue = asciiValue + i + key; // Reverse the encryption operation for subsequent characters
            }
            char decryptedChar = (char) asciiValue;
            decryptedStringBuilder.append(decryptedChar);
        }

        return decryptedStringBuilder.toString();
    }
}
