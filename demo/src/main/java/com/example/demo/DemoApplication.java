package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);

    // Example of creating an AdoptionPost object
    AdoptionPost post = new AdoptionPost();
    post.setTitle("Adopt a Puppy");
    post.setDescription("A cute puppy is looking for a new home.");
    post.setLocation("New York");
    System.out.println("Adoption Post Created: " + post);
    }
}
