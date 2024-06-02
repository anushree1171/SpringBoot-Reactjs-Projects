package com.TodoAppBE.service;

import com.TodoAppBE.dao.UserDao;
import com.TodoAppBE.entity.User;
import com.TodoAppBE.exceptions.UsernameOrEmailIdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserDao userDao;

    @Autowired
    PasswordEncoder passwordEncoder;


    @Override
    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDao.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userDao.findAll();
    }

    @Override
    public User getUserByUsernameOrEmailId(String username) {
        Optional<User> user = Optional.ofNullable(userDao.findByUsernameOrEmailId(username, ""));
        if(user.isPresent()){
            return user.get();
        }
        else{
            throw new UsernameOrEmailIdNotFoundException("User with username or email id of: "+username+" is not found.");
        }
    }

    @Override
    public boolean usernameOrEmailIdExists(String username, String email) {
        return userDao.existsByUsernameOrEmailId(username, email);
    }
}
