package com.Clothiverse.repository;


import com.Clothiverse.entities.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends MongoRepository<Customer,String> {
}
