package com.ASCP.MovieBrowser;

import java.io.*;
import java.util.Objects;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class MovieBrowserApplication{

  public static void main(String[] args){
    SpringApplication.run(MovieBrowserApplication.class, args);
  }

}

