package com.TodoAppBE.service;

import com.TodoAppBE.dao.UserDao;
import com.TodoAppBE.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    UserDao userDao;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDao.findByUsernameOrEmailId(username, username);
        if(user == null){
            throw new UsernameNotFoundException("User with the name or email of: "+username+" is not found.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), new ArrayList<>());
    }
    //no issues in this method, the user object is returned correctly with all the details
    //password in this method is encoded
}
