package com.ASCP.MovieBrowser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieBrowserApplication {

 // @Autowired
  //private EmailVerificationService senderService;

  public static void main(String[] args) {
    SpringApplication.run(MovieBrowserApplication.class, args);

  }
  //@EventListener(ApplicationReadyEvent.class)
  //public void sendMail() {
   // senderService.sendVerificationEmail("graceak0721@yahoo.com",
   //         "Welcome to FlickFlare!", "Please type this verification code into the designated box on our website " +
   //                 "Here is your verification code: 1234");
 // }

}