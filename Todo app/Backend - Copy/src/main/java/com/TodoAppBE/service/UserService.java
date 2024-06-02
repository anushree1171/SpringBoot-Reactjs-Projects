package com.TodoAppBE.service;

import com.TodoAppBE.entity.User;

import java.util.List;

public interface UserService {

    void saveUser(User user);

    List<User> getAllUsers();

    User getUserByUsernameOrEmailId(String username);

    boolean usernameOrEmailIdExists(String username, String email);
}
