package com.TodoAppBE.controller;

import com.TodoAppBE.dto.TaskDto;
import com.TodoAppBE.entity.Task;
import com.TodoAppBE.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
public class TaskController {

    @Autowired
    TaskService taskService;

    @PostMapping("/saveTask")
    public void saveTask(@RequestBody TaskDto task){
        taskService.saveTask(task);
    }

    @PostMapping("/saveAllTasks")
    public void saveAllTasks(@RequestBody List<TaskDto> taskList){
        taskService.saveAllTasks(taskList);
    }

    @GetMapping("/getTaskById/{id}")
    public Task getTaskById(@PathVariable Integer id){
        System.out.println("get task by id: "+id);
        return taskService.getTaskById(id);
    }

    @GetMapping("/getAllTasks")
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }

    @GetMapping("/getNonTrashTasks")
    public List<Task> getNonTrashTasks(){
        return taskService.getNonTrashTasks();
    }

    @GetMapping("/getTrashTasks")
    public List<Task> getTrashTasks(){
        return taskService.getTrashTasks();
    }

    @PutMapping("/updateTask/{id}")
    public void  updateTask(@PathVariable Integer id, @RequestBody TaskDto task){
        System.out.println(id);
        taskService.updateTask(id, task);
    }

    @DeleteMapping("/deleteTask/{id}")
    public void deleteTask(@PathVariable Integer id){
        taskService.deleteTaskById(id);
    }

    @GetMapping("/getAllTaskCategories")
    public List<String> getAllTaskCategories(){
        return taskService.getAllCategories();
    }

    @GetMapping("/getTop4Tasks")
    public List<Task> getTop4Tasks(){
        return taskService.getTop4Tasks();
    }

    @GetMapping("/getTasksTodays")
    public List<Task> getTasksTodays(){
        return taskService.getTaskByTodaysDate();
    }

    @GetMapping("/getTasksByDate/{date}")
    public List<Task> getTaskByDate(@PathVariable Date date){
        return taskService.getTaskByDate(date);
    }

    @GetMapping("/getTasksByCategory/{category}")
    public List<Task> getTasksByCategory(@PathVariable String category){
        return taskService.getTasksByCategory(category);
    }

    @PutMapping("/updateTaskStatus/{id}")
    public void updateTaskStatus(@PathVariable Integer id, @RequestBody String status){
        status= status.substring(1, status.length()-1);
        taskService.updateTaskStatus(id, status);
    }

    @PutMapping("/updateTaskTrash/{id}")
    public void updateTaskTrash(@PathVariable Integer id, @RequestBody Boolean trash){
        taskService.updateTaskTrash(id, trash);
    }


}
