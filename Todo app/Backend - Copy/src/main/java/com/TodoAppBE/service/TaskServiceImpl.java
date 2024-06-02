package com.TodoAppBE.service;

import com.TodoAppBE.dao.TaskDao;
import com.TodoAppBE.dao.UserDao;
import com.TodoAppBE.dto.TaskDto;
import com.TodoAppBE.entity.Task;
import com.TodoAppBE.entity.User;
import com.TodoAppBE.exceptions.TaskIdNotFoundException;
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
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskDao taskDao;

    @Autowired
    UserDao userDao;

    @Override
    public void saveTask(TaskDto task) {
        Date today = new Date(System.currentTimeMillis());

        String current_username = getAuthenticatedUsername();
        User user = getUserByUsername(current_username, "");

        Task t = new Task();
        t.setName(task.getName());
        t.setDescription(task.getDescription());
        t.setCategory(task.getCategory());
        t.setStatus(task.getStatus());
        t.setTrash(false);


        t.setTaskAddedDate(today);

        t.setUser(user);

        taskDao.save(t);
    }

    @Override
    public void saveAllTasks(List<TaskDto> taskList) {
        Date today = new Date(System.currentTimeMillis());
        String current_username = getAuthenticatedUsername();
        User user = getUserByUsername(current_username, "");

        for(TaskDto t : taskList) {
            Task task = new Task();
            task.setName(t.getName());
            task.setDescription(t.getDescription());
            task.setCategory(t.getCategory());
            task.setStatus(t.getStatus());
            task.setTrash(false);
            task.setTaskAddedDate(today);

            task.setUser(user);

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
        if(existingTask.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            existingTask.setName(updatedTask.getName());
            existingTask.setDescription(updatedTask.getDescription());
            existingTask.setCategory(updatedTask.getCategory());
            existingTask.setStatus(updatedTask.getStatus());
            taskDao.save(existingTask);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }

    }

    @Override
    public void deleteTaskById(Integer id) {
        Optional<Task> taskOptional = taskDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }
        Task taskToDelete = taskOptional.get();
        if(taskToDelete.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            taskDao.delete(taskToDelete);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }

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
        if(existingTask.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            existingTask.setStatus(status);
            taskDao.save(existingTask);
        }
        else{
            throw new AccessDeniedException("Access to modify is denied");
        }

    }

    @Override
    public void updateTaskTrash(Integer id, Boolean trash) {
        Optional<Task> taskOptional = taskDao.findById(id);
        if (taskOptional.isEmpty()) {
            throw new TaskIdNotFoundException("Task with id: " + id + " is not found");
        }
        Task existingTask = taskOptional.get();
        if(existingTask.getUser().getUsername().equalsIgnoreCase(getAuthenticatedUsername())){
            existingTask.setTrash(trash);
            taskDao.save(existingTask);
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
