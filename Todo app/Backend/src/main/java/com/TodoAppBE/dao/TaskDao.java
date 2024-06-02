package com.TodoAppBE.dao;

import com.TodoAppBE.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface TaskDao extends JpaRepository<Task, Integer> {

    @Query("SELECT DISTINCT t.category FROM Task t ") //Task - class name
    public List<String> getAllCategories();

    @Query("SELECT t FROM Task t WHERE t.trash = false")
    public List<Task> getNonTrashTasks();

    @Query("SELECT t FROM Task t WHERE t.trash = true")
    public List<Task> getTrashTasks();

    List<Task> findTop4ByTrashFalseOrderByTaskAddedDateDesc();

    @Query("SELECT t FROM Task t WHERE DATE(t.taskAddedDate) = DATE(:date)")
    List<Task> getTaskByTodaysDate(@Param("date") Date date);

    @Query("SELECT t FROM Task t WHERE DATE(t.taskAddedDate) = DATE(:date)")
    public List<Task> getTasksByDate(@Param("date") Date date);

    @Query("SELECT t FROM Task t WHERE LOWER(t.category) = :category")
    public List<Task> getTodoByCategory(String category);


}
