package com.ASCP.MovieBrowser.model;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "card")
@NoArgsConstructor
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long card_id;
    @Column
    private String cardNumber;
    @Column
    private String expDate;
    @Column
    private int secCode;
    @Column
    private String address;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String zip;
    @ManyToMany(mappedBy = "cards")
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private Set<User> users;
}
