package com.ASCP.MovieBrowser.service;

import jakarta.mail.SendFailedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Random;

@Service
public class EmailVerificationService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationEmail(String toEmail,
                                      String subject,
                                      String body){

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("flickflareverify@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);

        System.out.println("Mail Sent!");
    }

    public String codeGen() {
        Random rand = new Random();
        StringBuilder randString = new StringBuilder();
        for (int i = 0; i < 4; i++) {
            randString.append((char) rand.nextInt(48, 58));
        }
        return randString.toString();
    }



}
