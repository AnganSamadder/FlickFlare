package com.ASCP.FlickFlare.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Entity
@Data
@Table(name = "actor")
public class Actor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private long id;
    @ManyToMany(mappedBy = "cast")
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private Set<Movie> movies;
    @Column(nullable = false, unique = true)
    private String actor;

}