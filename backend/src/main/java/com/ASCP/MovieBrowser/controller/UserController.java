package com.ASCP.MovieBrowser.controller;


import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.repository.UserRepository;
import com.ASCP.MovieBrowser.service.UserService;
import com.ASCP.MovieBrowser.service.EmailVerificationService;
import jakarta.mail.SendFailedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSendException;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
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

    @PostMapping("/emailVerify")//Call when Register. Send Verification Email. Returns verification code. Also check if email is valid
    public ResponseEntity<String> verify(@RequestParam String email, @RequestParam String firstname) {
        try {
            if (userService.emailExists(email)) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists.");//Email already exists. Prompt to Sign in
            }
            String code = emailService.codeGen();
            String subject = "Welcome to FlickFlare!";
            emailService.sendVerificationEmail(email, subject,
                    "Hello " + firstname + ",\n\nPlease type this verification code into the designated box on our website " +
                            "Here is your verification code: " + code);
            return ResponseEntity.status(HttpStatus.OK).body(code);//Email Sent. Compare user input with returned code
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
    @PostMapping("/add")//Call when code is verified. Send all details from Registration page.
    public ResponseEntity<String> add(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully.");//success
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error Occurred: " + e.getMessage());//failure. Try again.
        }
    }


    @PostMapping("/login")//Login
    public ResponseEntity<String> login(@RequestParam String email, @RequestParam String password) {
        try {
            if (!userService.emailExists(email)) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Email");
            }
            User user = null;
            for (User tempUser : userRepository.findAll()) {
                if (tempUser.getEmail().equals(email)) {
                    user = tempUser;
                    break;
                }
            }
            if (user == null) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Email");
            }
            String pwd = userService.decrypt(user.getPassword());
            if (userService.validateCreds(pwd, password)) {
                if(user.isAdmin()){
                    return ResponseEntity.status(HttpStatus.OK).body("Admin Credentials verified");//Success. Redirect to Admin page
                }
                return ResponseEntity.status(HttpStatus.OK).body("Credentials verified");//Success. Redirect to user page
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Email or Password.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/get")
    public ResponseEntity<Object> get(@RequestParam int id) {
        try {
            User user = userService.getUser(id);
            if (user == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with the given ID doesn't exist");
            }
            user.setPassword("************");
            user.setCards(new HashSet<>());
            return ResponseEntity.status(HttpStatus.OK).body(user);//Success
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());//ServerFailure
        }
    }

    @GetMapping("/getCards")
    public ResponseEntity<Object> getCards(@RequestParam int id) throws ExecutionException, InterruptedException {
        Set<Card> temp;
        try {
            temp = new HashSet<>(userService.getCards(id));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with the given id doesn't exist.");//UserId incorrect
        }
        if(temp.isEmpty()){
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("User does not have any cards.");//No cards to show
        }
        for(Card card : temp){
            card.setCardNumber("XXXX XXXX XXXX " + userService.decrypt(card.getCardNumber().substring(12)));
        }
        return ResponseEntity.status(HttpStatus.OK).body(temp);//Success
    }

    @PostMapping("/forgotPassword")
    public ResponseEntity<String> forgotPassword(@RequestParam long id) {
        User user = null;
        try {
            if (userRepository.findById(id).isPresent()) {
                user = userRepository.findById(id).get();
            }
        } catch (Exception e) {
            throw new NullPointerException("User not found");
        }
        String firstname = user.getFirstName();
        String code = emailService.codeGen();
        String subject = "Forgot Password?";
        String email = user.getEmail();
        emailService.sendVerificationEmail(email, subject,
                "Hello " + firstname + ",\n\nPlease type this verification code into the designated box on our website " +
                        "Here is your verification code: " + code);
        return ResponseEntity.status(HttpStatus.OK).body(code);//Email sent Compare User input with returned code

    }
    @PutMapping("/editProfile")
    public ResponseEntity<String> editProfile(@RequestParam long id, @RequestBody User user){
        User editUser;
        if(userRepository.findById(id).isPresent()){
            editUser = userRepository.findById(id).get();
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with given id doesn't exist");
        }
        editUser.setFirstName(user.getFirstName());
        editUser.setLastName(user.getLastName());
        editUser.setPhoneNumber(user.getPhoneNumber());
        editUser.setSubToPromo(user.isSubToPromo());
        editUser.setAddress(user.getAddress());
        userRepository.save(editUser);
        return ResponseEntity.status(HttpStatus.OK).body("User profile successfully updated");
    }
//    @PutMapping("/editPassword")
//    public ResponseEntity<String> editPassword(@RequestParam long id, @RequestParam String password){
//        User user;
//        if(userRepository.findById(id).isPresent()){
//            user = userRepository.findById(id).get();
//        }else{
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with given id doesn't exist");
//        }
//        String decryptedPassword = userService.decrypt(user.getPassword());
//        if(userService.validateCreds(password, decryptedPassword)){//ValidatePwd
//
//        }
//        editUser.setFirstName(user.getFirstName());
//        userRepository.save(editUser);
//        return ResponseEntity.status(HttpStatus.OK).body("User profile successfully updated");
//    }
}