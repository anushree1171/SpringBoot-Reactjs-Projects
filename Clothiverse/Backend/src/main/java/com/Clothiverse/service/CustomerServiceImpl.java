package com.Clothiverse.service;


import com.Clothiverse.entities.Customer;
import com.Clothiverse.exceptions.CustomerNotFoundException;
import com.Clothiverse.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CustomerServiceImpl implements CustomerService{

    @Autowired
    CustomerRepo customerRepo;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    @Override
    public Customer getCustomerById(String id) {
        return customerRepo.findById(id).orElseThrow(()-> new CustomerNotFoundException("Customer with id: "+id+" not found."));
    }

    @Override
    public void addCustomer(Customer c) {
        customerRepo.save(c);
    }

    @Override
    public void deleteCustomerById(String id) {
        customerRepo.deleteById(id);
    }
}
