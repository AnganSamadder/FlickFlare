package com.ASCP.FlickFlare.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "user")
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long userId;
    @Column
    private String password;
    @Column
    private String email;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String phoneNumber;
    @Column
    private boolean subToPromo;
    @Column
    private boolean admin;
    @OneToMany(mappedBy = "cardUser", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Set<Card> cards = new HashSet<>();
    @OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Address> addresses;
    @Column
    private boolean verified;
    @Column
    private String verifyCode;

    @OneToMany(mappedBy = "bookingUser", cascade = CascadeType.PERSIST, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<Booking> bookings = new HashSet<>();



}
