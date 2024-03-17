package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.model.User;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.concurrent.ExecutionException;

@Service
public interface UserService {

    public boolean emailExists(String email);

    public void saveUser(User user);

    public User getUser(long id) throws ExecutionException, InterruptedException;

    public boolean validateCreds(User user, String inputPwd, String decrytpedPwd);

    public Set<Card> getCards(long id) throws ExecutionException, InterruptedException;

    //public void deleteUser(long id);

    public String encrypt(String encryptionString);
    public String decrypt(String encryptedString);
}

