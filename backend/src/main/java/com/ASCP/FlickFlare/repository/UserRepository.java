package com.ASCP.FlickFlare.repository;

import com.ASCP.FlickFlare.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    void deleteById(long id);
}
