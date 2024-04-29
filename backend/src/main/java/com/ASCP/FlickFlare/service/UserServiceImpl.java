package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Address;
import com.ASCP.FlickFlare.model.Card;
import com.ASCP.FlickFlare.model.User;
import com.ASCP.FlickFlare.repository.AddressRepository;
import com.ASCP.FlickFlare.repository.CardRepository;
import com.ASCP.FlickFlare.repository.UserRepository;
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
    @Autowired
    private AddressRepository addressRepository;


    public boolean emailExists(String email) {
        for (User existingUser : getAllUsers()) {
            System.out.println(existingUser.getEmail() + " " + email);
            if (email.equalsIgnoreCase(existingUser.getEmail())) {
                return true;
            }
        }
        return false;
    }

    public boolean validateCreds(String inputPwd, String decrytpedPwd) {
        return inputPwd.equals(decrytpedPwd);
    }

    public void saveUser(User user) {
        for (Card card : user.getCards()) {
            String encryptedNum = encrypt(card.getCardNumber());
            card.setCardNumber(encryptedNum);
            card.setCardUser(user);
        }
        for(Address address : user.getAddresses()){
            address.setUser(user);
        }
        String password = user.getPassword();
        UserServiceImpl userService = new UserServiceImpl();
        String encryptedPassword = userService.encrypt(password);
        user.setPassword(encryptedPassword);
        user.setEmail(user.getEmail().toLowerCase());
        userRepository.save(user);
        cardRepository.saveAll(user.getCards());
        addressRepository.saveAll(user.getAddresses());
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
