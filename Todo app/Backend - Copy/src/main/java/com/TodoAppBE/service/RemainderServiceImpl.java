package com.TodoAppBE.service;

import com.TodoAppBE.dao.RemainderDao;
import com.TodoAppBE.dao.UserDao;
import com.TodoAppBE.dto.ReminderDto;
import com.TodoAppBE.entity.Remainder;
import com.TodoAppBE.entity.User;
import com.TodoAppBE.exceptions.RemainderIdNotFoundException;
import com.TodoAppBE.exceptions.UsernameOrEmailIdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RemainderServiceImpl implements RemainderService {

    @Autowired
    RemainderDao remainderDao;

    @Autowired
    UserDao userDao;


    @Override
    public void save(ReminderDto remainder) {
        String current_username = getAuthenticatedUsername();
        User user = getUserByUsername(current_username, "");

        Remainder r = new Remainder();
        r.setName(remainder.getName());
        r.setDate(remainder.getDate());
        r.setTime(remainder.getTime());
        r.setStatus("notDone");
        r.setTrash(false);
        r.setSetOnDate(new Date(System.currentTimeMillis()));
        r.setUser(user);

        remainderDao.save(r);

    }

    @Override
    public void saveAll(List<ReminderDto> remainders) {
        String current_username = getAuthenticatedUsername();
        User user = getUserByUsername(current_username, "");

        for(ReminderDto r : remainders){
            Remainder remainder = new Remainder();
            remainder.setName(r.getName());
            remainder.setDate(r.getDate());
            remainder.setTime(r.getTime());
            remainder.setStatus("notDone");
            remainder.setTrash(false);
            remainder.setSetOnDate(new Date(System.currentTimeMillis()));
            remainder.setUser(user);

            remainderDao.save(remainder);
        }

    }


    @Override
    public Remainder getRemainderById(Integer id) {
        Optional<Remainder> remainderOptional = remainderDao.findById(id);
        if(remainderOptional.isEmpty()){
            throw new RemainderIdNotFoundException("Remainder with id: " + id + " is not found");
        }
        return remainderOptional.get();
    }

    @Override
    public List<Remainder> getAllRemainders() {
        return remainderDao.findAll();
    }

    @Override
    public void updateRemainder(Integer id, ReminderDto remainder) {
        Optional<Remainder> remainderOptional = remainderDao.findById(id);
        if(remainderOptional.isEmpty()){
            throw new RemainderIdNotFoundException("Task with id: " + id + " is not found");
        }

        Remainder existingRemainder = remainderOptional.get();
        if(existingRemainder.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            existingRemainder.setName(remainder.getName());
            existingRemainder.setDate(remainder.getDate());
            existingRemainder.setTime(remainder.getTime());

            remainderDao.save(existingRemainder);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }
    }

    @Override
    public void deleteRemainderById(Integer id) {
        Optional<Remainder> taskOptional = remainderDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new RemainderIdNotFoundException("Remainder with id: " + id + " is not found");
        }
        Remainder remainderToDelete = taskOptional.get();
        if(remainderToDelete.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            remainderDao.delete(remainderToDelete);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }
    }

    @Override
    public List<Remainder> getRemainderByTodaysDate() {
        Date date = new Date(System.currentTimeMillis());
        return remainderDao.getRemainderByTodaysDate(date);
    }

    @Override
    public List<Remainder> getRemainderByDate(Date date){
        return remainderDao.getRemainderByDate(date);
    }

    @Override
    public List<Remainder> getTrashRemainder() {
        return remainderDao.getTrashRemainder();
    }

    @Override
    public List<Remainder> getNonTrashRemainder() {
        return remainderDao.getNonTrashRemainder();
    }

    @Override
    public void updateRemainderStatus(Integer id, String status) {
        Optional<Remainder> remainderOptional = remainderDao.findById(id);
        if(remainderOptional.isEmpty()){
            throw new RemainderIdNotFoundException("Task with id: " + id + " is not found");
        }

        Remainder existingRemainder = remainderOptional.get();
        if(existingRemainder.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            existingRemainder.setStatus(status);
            remainderDao.save(existingRemainder);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }
    }

    @Override
    public void updateRemainderTrash(Integer id, Boolean trash) {
        Optional<Remainder> remainderOptional = remainderDao.findById(id);
        if(remainderOptional.isEmpty()){
            throw new RemainderIdNotFoundException("Task with id: " + id + " is not found");
        }

        Remainder existingRemainder = remainderOptional.get();
        if(existingRemainder.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            existingRemainder.setTrash(trash);
            remainderDao.save(existingRemainder);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }

    }

    //utility methods

    private String getAuthenticatedUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new AuthenticationCredentialsNotFoundException("User is not authenticated");
        }
        return authentication.getName();
    }

    private User getUserByUsername(String username, String email) {
        if(userDao.existsByUsernameOrEmailId(username, email)){
            return userDao.findByUsernameOrEmailId(username, email);
        }
        else{
            throw new UsernameOrEmailIdNotFoundException("User not found");
        }
    }


}
