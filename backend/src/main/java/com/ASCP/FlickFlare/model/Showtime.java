package com.ASCP.FlickFlare.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "showtime")
public class Showtime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;
    @Column
    private String time;
    private long date;
    private int layout;
    private String bookedSeats;
    @ManyToOne
    @JoinTable(
            name = "movie_showtime",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "showtime_id")
    )
    @EqualsAndHashCode.Exclude
    private Movie movie;
    @OneToMany(mappedBy = "bookedShowtime", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    private Set<Booking> bookings = new HashSet<>();
}