package com.Clothiverse.controller;



import com.Clothiverse.entities.Customer;
import com.Clothiverse.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @PostMapping("/saveCustomer")
    public String saveCustomer(@RequestBody Customer c){
        customerService.addCustomer(c);
        return "Success";
    }

    @GetMapping("/getAllCustomers")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }

    @GetMapping("/getCustomerById/{id}")
    public Customer getCustomerById(@PathVariable String id){
        return customerService.getCustomerById(id);
    }

    @PutMapping("/updateCustomerById/{id}")
    public String updateCustomer(@PathVariable String id, @RequestBody Customer c){
        c.setC_id(id);
        customerService.addCustomer(c);
        return "Success";
    }

    @DeleteMapping("/deleteCustomerById/{id}")
    public String deleteCustomer(@PathVariable String id){
        customerService.deleteCustomerById(id);
        return "Success";
    }
}
