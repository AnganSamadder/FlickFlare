package com.ASCP.MovieBrowser.repository;

import com.ASCP.MovieBrowser.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
