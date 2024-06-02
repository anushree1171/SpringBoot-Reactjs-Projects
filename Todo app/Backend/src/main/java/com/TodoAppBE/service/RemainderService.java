package com.TodoAppBE.service;

import com.TodoAppBE.dto.ReminderDto;
import com.TodoAppBE.entity.Remainder;

import java.sql.Date;
import java.util.List;

public interface RemainderService {

    public void save(ReminderDto remainder);

    public void saveAll(List<ReminderDto> remainders);

    public Remainder getRemainderById(Integer id);

    public List<Remainder> getAllRemainders();

    public void updateRemainder(Integer id, ReminderDto remainder);

    public void deleteRemainderById(Integer id);

    public List<Remainder> getRemainderByTodaysDate();

    public List<Remainder> getRemainderByDate(Date date);

    public List<Remainder> getTrashRemainder();

    public List<Remainder> getNonTrashRemainder();

    public void updateRemainderStatus(Integer id, String status);

    public void updateRemainderTrash(Integer id, Boolean trash);
}
