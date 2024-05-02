package com.ASCP.FlickFlare.model;

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
    @ManyToOne
    @JoinTable(
            name = "user_card",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "card_id")
    )
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private User cardUser;
    @Column
    private String cardNumber;
    @Column
    private String expMonth;
    @Column
    private String expYear;
    @Column
    private int secCode;
    @Column
    private String street;
    @Column
    private String streetTwo;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String zip;

}
