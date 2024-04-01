package com.MongoSpringReactPractice.service;

import com.MongoSpringReactPractice.entity.Employee;

import java.util.List;

public interface EmployeeService {

    public String saveEmp(Employee employee);

    public Employee getEmployeeById(String id);

    public List<Employee> getAllEmployees();

    public String updateEmployee(Employee employee);

    public String deleteEmployeeById(String id);
}
