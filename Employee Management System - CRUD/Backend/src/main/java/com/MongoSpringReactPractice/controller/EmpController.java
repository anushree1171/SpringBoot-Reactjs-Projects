package com.MongoSpringReactPractice.controller;

import com.MongoSpringReactPractice.entity.Employee;
import com.MongoSpringReactPractice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
public class EmpController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/save")
    public String save(@RequestBody Employee employee){
        return employeeService.saveEmp(employee);
    }

    @GetMapping("/get/{id}")
    public Employee getEmpById(@PathVariable("id") String id){
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/getAll")
    public List<Employee> getAllEmps(){
        return employeeService.getAllEmployees();
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable String id, @RequestBody Employee employee){
        employee.setId(id);
        return employeeService.saveEmp(employee);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable String id){
        return employeeService.deleteEmployeeById(id);
    }
}
