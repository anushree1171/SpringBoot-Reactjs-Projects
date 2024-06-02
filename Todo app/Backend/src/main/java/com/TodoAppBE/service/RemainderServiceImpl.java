package com.TodoAppBE.service;

import com.TodoAppBE.dao.RemainderDao;
import com.TodoAppBE.dto.ReminderDto;
import com.TodoAppBE.entity.Remainder;
import com.TodoAppBE.exceptions.RemainderIdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RemainderServiceImpl implements RemainderService {

    @Autowired
    RemainderDao remainderDao;

    @Override
    public void save(ReminderDto remainder) {

        Remainder r = new Remainder();
        r.setName(remainder.getName());
        r.setDate(remainder.getDate());
        r.setTime(remainder.getTime());
        r.setStatus("notDone");
        r.setTrash(false);
        r.setSetOnDate(new Date(System.currentTimeMillis()));

        remainderDao.save(r);

    }

    @Override
    public void saveAll(List<ReminderDto> remainders) {

        for(ReminderDto r : remainders){
            Remainder remainder = new Remainder();
            remainder.setName(r.getName());
            remainder.setDate(r.getDate());
            remainder.setTime(r.getTime());
            remainder.setStatus("notDone");
            remainder.setTrash(false);
            remainder.setSetOnDate(new Date(System.currentTimeMillis()));

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
        existingRemainder.setName(remainder.getName());
        existingRemainder.setDate(remainder.getDate());
        existingRemainder.setTime(remainder.getTime());

        remainderDao.save(existingRemainder);

    }

    @Override
    public void deleteRemainderById(Integer id) {
        Optional<Remainder> taskOptional = remainderDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new RemainderIdNotFoundException("Remainder with id: " + id + " is not found");
        }
        Remainder remainderToDelete = taskOptional.get();
        remainderDao.delete(remainderToDelete);

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
        existingRemainder.setStatus(status);
        remainderDao.save(existingRemainder);

    }

    @Override
    public void updateRemainderTrash(Integer id, Boolean trash) {
        Optional<Remainder> remainderOptional = remainderDao.findById(id);
        if(remainderOptional.isEmpty()){
            throw new RemainderIdNotFoundException("Task with id: " + id + " is not found");
        }

        Remainder existingRemainder = remainderOptional.get();
        existingRemainder.setTrash(trash);
        remainderDao.save(existingRemainder);
    }
}
