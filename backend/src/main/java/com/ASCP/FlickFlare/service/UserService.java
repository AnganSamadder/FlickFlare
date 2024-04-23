package com.ASCP.FlickFlare.service;

import com.ASCP.FlickFlare.model.Card;
import com.ASCP.FlickFlare.model.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutionException;

@Service
public interface UserService {

    boolean emailExists(String email);

    void saveUser(User user);

    List<User> getAllUsers();

    User getUser(long id);

    boolean validateCreds(String inputPwd, String decrytpedPwd);

    Set<Card> getCards(long id);

    void verify(long id);

    String encrypt(String encryptionString);

    String decrypt(String encryptedString);
}

