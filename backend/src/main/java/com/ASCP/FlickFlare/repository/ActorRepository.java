package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.Actor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ActorRepository extends CrudRepository<Actor, Long> {
    Optional<Actor> findByActor(String actor);
}
