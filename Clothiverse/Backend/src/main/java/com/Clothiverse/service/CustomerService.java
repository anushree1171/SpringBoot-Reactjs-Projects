package com.Clothiverse.service;


import com.Clothiverse.entities.Customer;

import java.util.List;

public interface CustomerService {

    List<Customer> getAllCustomers();

    Customer getCustomerById(String id);

    void addCustomer(Customer c);

    void deleteCustomerById(String id);
}
