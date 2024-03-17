package com.ASCP.MovieBrowser.controller;


import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.repository.UserRepository;
import com.ASCP.MovieBrowser.service.UserService;
import com.ASCP.MovieBrowser.service.EmailVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @Autowired
    public UserRepository userRepository;
    @PostMapping("/add")
    public ResponseEntity<String> add(@RequestBody User user) {
        try {
            String email=user.getEmail();
            if (userService.emailExists(email)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists.");//Email already exists. Prompt to Sign in
            }
            String password = user.getPassword();
            String encryptedPassword = userService.encrypt(password);
            user.setPassword(encryptedPassword);
            userService.saveUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully.");//success
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("P");//failure. Prompt to refresh or wait a few minutes and try again.
        }
    }

    @PostMapping("/login")
    public  ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        if(!userService.emailExists(email)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Email");
        }
        User user = null;
        for(User tempUser : userRepository.findAll()){
            if(tempUser.getEmail().equals(email)){
                user=tempUser;
                break;
            }
        }
        String pwd=userService.decrypt(user.getPassword());
        if(userService.validateCreds(user,pwd, password)){
            return ResponseEntity.status(HttpStatus.OK).body("Credentials verified");//Success
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Email or Password.");
        }
    }
    @PostMapping("/verify")
    public String verify(@RequestParam String email, @RequestParam String firstname) {
        String code = emailService.codeGen();
        emailService.sendVerificationEmail(email,
                "Hello " + firstname + ",\n\nPlease type this verification code into the designated box on our website " +
                        "Here is your verification code: " + code);
        return code;//Compare user input with returned code
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