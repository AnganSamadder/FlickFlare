package com.ASCP.MovieBrowser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;


@Service
public class EmailVerificationService {
    @Autowired
    private JavaMailSender mailSender;

    public void sendVerificationEmail(String toEmail,
                                      String subject,
                                      String body) {

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("flickflareverify@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        mailSender.send(message);

        System.out.println("Mail Sent!");
    }
}
