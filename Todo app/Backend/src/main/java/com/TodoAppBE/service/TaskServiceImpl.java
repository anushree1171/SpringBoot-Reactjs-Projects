package com.TodoAppBE.service;

import com.TodoAppBE.dao.TaskDao;
import com.TodoAppBE.dto.TaskDto;
import com.TodoAppBE.entity.Task;
import com.TodoAppBE.exceptions.TaskIdNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskDao taskDao;

    @Override
    public void saveTask(TaskDto task) {
        Date today = new Date(System.currentTimeMillis());

        Task t = new Task();
        t.setName(task.getName());
        t.setDescription(task.getDescription());
        t.setCategory(task.getCategory());
        t.setStatus(task.getStatus());
        t.setTrash(false);


        t.setTaskAddedDate(today);

        taskDao.save(t);
    }

    @Override
    public void saveAllTasks(List<TaskDto> taskList) {
        Date today = new Date(System.currentTimeMillis());

        for(TaskDto t : taskList) {
            Task task = new Task();
            task.setName(t.getName());
            task.setDescription(t.getDescription());
            task.setCategory(t.getCategory());
            task.setStatus(t.getStatus());
            task.setTrash(false);
            task.setTaskAddedDate(today);

            taskDao.save(task);
        }
    }


    @Override
    public Task getTaskById(Integer id) {
        Optional<Task> taskOptional = taskDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }
        return taskOptional.get();
    }

    @Override
    public List<Task> getAllTasks() {
        return taskDao.findAll();
    }

    @Override
    public List<Task> getNonTrashTasks() {
        return taskDao.getNonTrashTasks();
    }

    @Override
    public List<Task> getTrashTasks() {
        return taskDao.getTrashTasks();
    }


    @Override
    public void updateTask(Integer id, TaskDto updatedTask) {
        Optional<Task> taskOptional = taskDao.findById(id);

        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }

        Task existingTask = taskOptional.get();

        existingTask.setName(updatedTask.getName());
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setCategory(updatedTask.getCategory());
        existingTask.setStatus(updatedTask.getStatus());
        taskDao.save(existingTask);


    }

    @Override
    public void deleteTaskById(Integer id) {
        Optional<Task> taskOptional = taskDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }
        Task taskToDelete = taskOptional.get();
        taskDao.delete(taskToDelete);
    }

    @Override
    public List<String> getAllCategories() {
        return taskDao.getAllCategories();
    }

    @Override
    public List<Task> getTop4Tasks() {
        return taskDao.findTop4ByTrashFalseOrderByTaskAddedDateDesc();
    }

    @Override
    public List<Task> getTaskByTodaysDate() {
        Date today = new Date(System.currentTimeMillis());
        return taskDao.getTaskByTodaysDate(today);
    }

    @Override
    public List<Task> getTaskByDate(Date date) {
        return taskDao.getTasksByDate(date);
    }


    @Override
    public List<Task> getTasksByCategory(String category) {
        return taskDao.getTodoByCategory(category);
    }

    @Override
    public void updateTaskStatus(Integer id, String status) {
        Optional<Task> taskOptional = taskDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }
        Task existingTask = taskOptional.get();
        existingTask.setStatus(status);
        taskDao.save(existingTask);


    }

    @Override
    public void updateTaskTrash(Integer id, Boolean trash) {
        Optional<Task> taskOptional = taskDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }
        Task existingTask = taskOptional.get();
        existingTask.setTrash(trash);
        taskDao.save(existingTask);

    }
}
