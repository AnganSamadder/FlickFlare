package com.ASCP.MovieBrowser.controller;


import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.service.UserService;
import com.ASCP.MovieBrowser.service.EmailVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.concurrent.ExecutionException;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    public UserService userService;
    @Autowired
    public EmailVerificationService emailService;

    @PostMapping("/add")
    public int add(@RequestBody User user) {
        try {
            if (userService.emailExists(user)) {
                return 409;//Email already exists. Prompt to Sign in
            }
            String password = user.getPassword();
            String encryptedPassword = userService.encrypt(password);
            user.setPassword(encryptedPassword);
            userService.saveUser(user);
            return 201;//success
        } catch (Exception e) {
            return 401;//failure. Prompt to refresh and try again.
        }
    }

    @PostMapping("/verify")
    public String verify(@RequestParam String email, @RequestParam String firstname) {
        String code = emailService.codeGen();
        emailService.sendVerificationEmail(email,
                "Hello " + firstname + ",\n\nPlease type this verification code into the designated box on our website " +
                        "Here is your verification code: " + code);
        return code;
    }

    @GetMapping("/get")
    public User get(@RequestParam int id) throws ExecutionException, InterruptedException {
        return userService.getUser(id);//if null, id doesn't exist
    }

    @GetMapping("/getCards")
    public Set<Card> getCards(@RequestParam int id) throws ExecutionException, InterruptedException {
        return userService.getCards(id);
    }

}