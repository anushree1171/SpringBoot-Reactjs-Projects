package com.TodoAppBE.controller;

import com.TodoAppBE.dto.ReminderDto;
import com.TodoAppBE.entity.Remainder;
import com.TodoAppBE.service.RemainderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin("*")
public class RemainderController {

    @Autowired
    RemainderService remainderService;

    @PostMapping("/saveRemainder")
    public void saveRemainder(@RequestBody ReminderDto remainder){
        remainderService.save(remainder);
    }

    @PostMapping("/saveAllRemainders")
    public void saveAllRemainders(@RequestBody List<ReminderDto> remainders){
        remainderService.saveAll(remainders);
    }

    @GetMapping("/getRemainderById/{id}")
    public Remainder getRemainderById(@PathVariable Integer id){
        return remainderService.getRemainderById(id);
    }

    @GetMapping("/getAllRemainders")
    public List<Remainder> getAllRemainders(){
        return remainderService.getAllRemainders();
    }

    @PutMapping("/updateRemainder/{id}")
    public void  updateRemainder(@PathVariable Integer id, @RequestBody ReminderDto remainder){
        remainderService.updateRemainder(id, remainder);
    }

    @DeleteMapping("/deleteRemainder/{id}")
    public void deleteRemainder(@PathVariable Integer id){
        remainderService.deleteRemainderById(id);
    }

    @GetMapping("/getRemainderByTodaysDate")
    public List<Remainder> getRemainderByTodaysDate(){
        return remainderService.getRemainderByTodaysDate();
    }

    @GetMapping("/getRemainderByDate/{date}")
    public List<Remainder> getRemainderByDate(@PathVariable Date date){
        return remainderService.getRemainderByDate(date);
    }

    @GetMapping("/getTrashRemainder")
    public List<Remainder> getTrashRemainder(){
        return remainderService.getTrashRemainder();
    }

    @GetMapping("/getNonTrashRemainder")
    public List<Remainder> getNonTrashRemainder(){
        return remainderService.getNonTrashRemainder();
    }

    @PutMapping("/updateRemainderStatus/{id}")
    public void updateRemainderStatus(@PathVariable Integer id, @RequestBody String status){
        status= status.substring(1, status.length()-1);
        remainderService.updateRemainderStatus(id,status);
    }

    @PutMapping("/updateRemainderTrash/{id}")
    public void updateRemainderTrash(@PathVariable Integer id, @RequestBody Boolean trash){
        remainderService.updateRemainderTrash(id, trash);
    }
}
