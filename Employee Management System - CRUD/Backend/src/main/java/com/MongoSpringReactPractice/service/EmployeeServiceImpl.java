package com.MongoSpringReactPractice.service;

import com.MongoSpringReactPractice.dao.EmployeeDao;
import com.MongoSpringReactPractice.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    EmployeeDao employeeDao;

    @Override
    public String saveEmp(Employee employee) {
        employeeDao.save(employee);
        return "Employee record saved";
    }

    @Override
    public Employee getEmployeeById(String id) {
        return employeeDao.findById(id).orElse(null);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeDao.findAll();
    }

    @Override
    public String updateEmployee(Employee employee) {
        employeeDao.save(employee);
        return "Employee record updated";
    }

    @Override
    public String deleteEmployeeById(String id) {
        employeeDao.deleteById(id);
        return "Employee record deleted";
    }
}
