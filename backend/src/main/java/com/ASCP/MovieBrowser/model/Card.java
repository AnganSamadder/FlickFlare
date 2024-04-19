package com.ASCP.MovieBrowser.model;

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
    private User CardUser;
    @Column
    private String cardNumber;
    @Column
    private String expMonth;
    @Column
    private String expYear;
    @Column
    private int secCode;
}
