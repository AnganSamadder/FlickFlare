package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.repository.CardRepository;
import com.ASCP.MovieBrowser.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CardRepository cardRepository;


    @Override
    public boolean emailExists(String email) {
        String emailLowerCase = email.toLowerCase();
//        System.out.println("hi sdfg");
//        System.out.println("bye\n" + getAllUsers() + "sdfg");
        for (User existingUser : getAllUsers()) {
            System.out.println(existingUser.getEmail());
            if (emailLowerCase.equalsIgnoreCase(existingUser.getEmail())) {
                return true;
            }
        }
        return false;
    }

    public boolean validateCreds(String inputPwd, String decrytpedPwd) {
        if (inputPwd.equals(decrytpedPwd)) {
            return true;
        }
        return false;
    }

    public void saveUser(User user) {
        for (Card card : user.getCards()) {
            String encryptedNum = encrypt(card.getCardNumber());
            card.setCardNumber(encryptedNum);
        }

        cardRepository.saveAll(user.getCards());
        String password = user.getPassword();
        UserServiceImpl userService = new UserServiceImpl();
        String encryptedPassword = userService.encrypt(password);
        user.setPassword(encryptedPassword);
        user.setEmail(user.getEmail().toLowerCase());
        userRepository.save(user);
    }

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
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

    public void verify(long id) {
        User user = getUser(id);
        user.setVerified(true);
        user.setVerifyCode("0");
        userRepository.save(user);
    }

    public String encrypt(String encryptionString) {

        final int key = 7;
        String encryptedString = "";
        StringBuilder encryptedStringBuilder = new StringBuilder();

        for (int i = 0; i < encryptionString.length(); i++) {
            char character = encryptionString.charAt(i);
            int asciiValue = (int) character;

            if (i == 0) {
                asciiValue = asciiValue + 1;

            } else {
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

            if (i == 0) {
                asciiValue = asciiValue - 1; // Reverse the encryption operation for the first character
            } else {
                asciiValue = asciiValue + i + key; // Reverse the encryption operation for subsequent characters
            }
            char decryptedChar = (char) asciiValue;
            decryptedStringBuilder.append(decryptedChar);
        }

        return decryptedStringBuilder.toString();
    }
}
