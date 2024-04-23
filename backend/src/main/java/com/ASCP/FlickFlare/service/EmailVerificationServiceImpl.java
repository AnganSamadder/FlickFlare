package com.ASCP.FlickFlare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Random;

@Service
public class EmailVerificationServiceImpl implements EmailVerificationService {
    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendVerificationEmail(String toEmail,
                                      String subject,
                                      String body) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("flickflareverify@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);

        System.out.println("Mail Sent!");
    }

    @Override
    public String codeGen() {
        Random rand = new Random();
        StringBuilder randString = new StringBuilder();
        for (int i = 0; i < 4; i++) {
            randString.append((char) rand.nextInt(48, 58));
        }
        return randString.toString();
    }


}
