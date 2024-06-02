package com.TodoAppBE.dao;

import com.TodoAppBE.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

    boolean existsByUsernameOrEmailId(String username, String emailId);
    User findByUsernameOrEmailId(String username, String emailId);
}
