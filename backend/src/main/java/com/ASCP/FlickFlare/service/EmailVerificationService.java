package com.ASCP.FlickFlare.service;

public interface EmailVerificationService {
    void sendVerificationEmail(String toEmail, String subject, String body);

    String codeGen();
}
