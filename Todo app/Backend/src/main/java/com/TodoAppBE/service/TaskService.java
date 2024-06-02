package com.TodoAppBE.service;

import com.TodoAppBE.dto.TaskDto;
import com.TodoAppBE.entity.Task;

import java.sql.Date;
import java.util.List;

public interface TaskService {

    public void saveTask(TaskDto task);

    public void saveAllTasks(List<TaskDto> taskList);

    public Task getTaskById(Integer id);

    public List<Task> getAllTasks();

    public List<Task> getNonTrashTasks();

    public List<Task> getTrashTasks();

    public void updateTask(Integer id, TaskDto task);

    public void deleteTaskById(Integer id);

    public List<String> getAllCategories();

    public List<Task> getTop4Tasks();

    List<Task> getTaskByTodaysDate();

    List<Task> getTaskByDate(Date date);

    List<Task> getTasksByCategory(String category);

    public void updateTaskStatus(Integer id, String status);

    public void updateTaskTrash(Integer id, Boolean trash);
}
