package com.ASCP.MovieBrowser.repository;

import com.ASCP.MovieBrowser.model.Actor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Long> {
    Optional<Actor> findByActor(String actor);
}
