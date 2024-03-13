package com.ASCP.MovieBrowser.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Entity
@Data
@Table(name = "genre")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;
    @ManyToMany(mappedBy = "genres")
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private Set<Movie> movies;
    @Column(nullable = false, unique = true)
    private String genre;

}