package com.ASCP.MovieBrowser.controller;


import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.concurrent.ExecutionException;


//import com.ASCP.MovieBrowser.repository.UserRepository;
//import com.ASCP.MovieBrowser.repository.CardRepository;

@RestController
@RequestMapping("/user")
public class UserController {
//    @Autowired
//    private UserRepository ur;
//    @Autowired
//    private CardRepository cr;
    @Autowired
    public UserService userService;
    @PostMapping("/add")
    public long add(@RequestBody User user) {
        try{
            userService.saveUser(user);
            return user.getUser_id();//success
        }
        catch (Exception e){
            return 401;//failure
        }
    }

    @GetMapping("/get")
    public User get(@RequestParam int id) throws ExecutionException, InterruptedException {
        return userService.getUser(id);
    }

    @GetMapping("/getCards")
    public Set<Card> getCards(@RequestParam int id) throws ExecutionException, InterruptedException {
        return userService.getCards(id);
    }

//    @DeleteMapping("/delAll")
//    public int delAll(){
//        ur.deleteAll();
//        return 201;
//    }
//    @DeleteMapping("/delAllCards")
//    public int delAllCards(){
//        cr.deleteAll();
//        return 0;
//    }
}
