package com.ASCP.MovieBrowser.controller;


import com.ASCP.MovieBrowser.model.User;
import com.ASCP.MovieBrowser.model.Card;
import com.ASCP.MovieBrowser.repository.UserRepository;
import com.ASCP.MovieBrowser.service.EmailVerificationServiceImpl;
import com.ASCP.MovieBrowser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ExecutionException;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    public UserService userService;
    @Autowired
    public EmailVerificationServiceImpl emailService;
    @Autowired
    public UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        try {
            System.out.println("user");
            if (userService.emailExists(user.getEmail())) {
                System.out.println("Email already exists.");
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists.");
            }
            String code = emailService.codeGen();
            String subject = "Welcome to FlickFlare!";
            emailService.sendVerificationEmail(user.getEmail(), subject,
                    "Hello " + user.getFirstName() + ",\n\nPlease type this verification code into the designated box on our website " +
                            "Here is your verification code: " + code);
            user.setVerifyCode(code);
            userService.saveUser(user);
            return ResponseEntity.status(HttpStatus.OK).body(Long.toString(user.getUserId()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/verify")
    public ResponseEntity<String> verify(@RequestParam long id) {
        try {
            userService.verify(id);
            return ResponseEntity.status(HttpStatus.OK).body("User verified");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/login")
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
            if (!user.isVerified()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Please verify your email first.");
            }
            String pwd = userService.decrypt(user.getPassword());
            if (userService.validateCreds(pwd, password)) {
                if (user.isAdmin()) {
                    return ResponseEntity.status(HttpStatus.OK).body("Admin Credentials verified");//Success. Redirect to Admin page
                }
                return ResponseEntity.status(HttpStatus.OK).body(Long.toString(user.getUserId()));//Success. Redirect to user page
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Email or Password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/getAll")
    public ResponseEntity<Object> getAll() {
        try {
            List<User> users = userService.getAllUsers();
            for (User user : users) {
                user.setPassword("************");
                user.setCards(new HashSet<>());
            }
            return ResponseEntity.status(HttpStatus.OK).body(users);
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
            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/getCards")
    public ResponseEntity<Object> getCards(@RequestParam int id) throws ExecutionException, InterruptedException {
        Set<Card> temp;
        try {
            temp = new HashSet<>(userService.getCards(id));
        } catch (NullPointerException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with the given id doesn't exist.");
        }
        if (temp.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("User does not have any cards.");
        }
        for (Card card : temp) {
            card.setCardNumber("XXXX XXXX XXXX " + userService.decrypt(card.getCardNumber().substring(12)));
        }
        return ResponseEntity.status(HttpStatus.OK).body(temp);
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
        return ResponseEntity.status(HttpStatus.OK).body(code);

    }

    @PutMapping("/editProfile")
    public ResponseEntity<String> editProfile(@RequestParam long id, @RequestBody User user) {
        User editUser;
        if (userRepository.findById(id).isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with given id doesn't exist");
        }
        user.setUserId(id);
        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.OK).body("User profile successfully updated");
    }

    @PostMapping("/updateNotifyEmail")
    public void updateEmail(@RequestParam long id) {
        User user = null;
        try {
            if (userRepository.findById(id).isPresent()) {
                user = userRepository.findById(id).get();
            }
        } catch (Exception e) {
            throw new NullPointerException("User not found");
        }
        String firstname = user.getFirstName();
        String subject = "Your account information has been updated!";
        String body = "Hello" + firstname + " Your account information has been updated," +
                "if this was not you, contact us at FlickFlareverify@gmail.com";
        String email = user.getEmail();
        emailService.sendVerificationEmail(email, subject, body);
    }

    @PutMapping("/newPassword")
    public void newPassword(@RequestParam long id, String newPassword) {
        User user = null;
        try {
            if (userRepository.findById(id).isPresent()) {
                user = userRepository.findById(id).get();
            }
        } catch (Exception e) {
            throw new NullPointerException("User not found");
        }
        user.setPassword(newPassword);
        String password = user.getPassword();
        String encryptedPassword = userService.encrypt(password);
        user.setPassword(encryptedPassword);
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