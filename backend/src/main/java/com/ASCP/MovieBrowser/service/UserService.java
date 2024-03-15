package com.ASCP.MovieBrowser.service;

import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.model.User;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.concurrent.ExecutionException;

@Service
public interface UserService {

    public void saveUser(User user);
    public User getUser(long id) throws ExecutionException, InterruptedException;
    public Set<Card> getCards(long id) throws ExecutionException, InterruptedException;

    //public void deleteUser(long id);
}
