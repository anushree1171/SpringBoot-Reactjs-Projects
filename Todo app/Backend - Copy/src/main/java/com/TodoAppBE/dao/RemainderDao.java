package com.TodoAppBE.dao;

import com.TodoAppBE.entity.Remainder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface RemainderDao extends JpaRepository<Remainder, Integer> {

    @Query("SELECT r FROM Remainder r WHERE DATE(r.setOnDate) = DATE(:date)")
    public List<Remainder> getRemainderByTodaysDate(@Param("date") Date date);

    @Query("SELECT r FROM Remainder r WHERE DATE(r.date) = DATE(:date)")
    public List<Remainder> getRemainderByDate(@Param("date") Date date);

    @Query("SELECT r FROM Remainder r WHERE r.trash = true")
    public List<Remainder> getTrashRemainder();

    @Query("SELECT r FROM Remainder r WHERE r.trash = false")
    public List<Remainder> getNonTrashRemainder();


}
