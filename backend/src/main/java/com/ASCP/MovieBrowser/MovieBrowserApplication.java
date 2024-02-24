package com.ASCP.MovieBrowser;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Objects;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MovieBrowserApplication{

  public static void main(String[] args) throws IOException{
    File serviceAccountfile = new File(Objects.requireNonNull(MovieBrowserApplication.class.getClassLoader().getResource("serviceAccountKey.json")).getFile());
    FileInputStream serviceAccount = new FileInputStream(serviceAccountfile.getAbsolutePath());

    FirebaseOptions options = new FirebaseOptions.Builder()
            .setCredentials(GoogleCredentials.fromStream(serviceAccount))
            .build();

    if(FirebaseApp.getApps().isEmpty()){
      FirebaseApp.initializeApp(options);
    }

    SpringApplication.run(MovieBrowserApplication.class, args);
  }

}
