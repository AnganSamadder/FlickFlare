package com.ASCP.MovieBrowser.service;

public interface EmailVerificationService {
    void sendVerificationEmail(String toEmail, String subject, String body);

    String codeGen();
}
