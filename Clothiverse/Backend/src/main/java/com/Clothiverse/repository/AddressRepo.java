package com.Clothiverse.repository;


import com.Clothiverse.entities.Address;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepo extends MongoRepository<Address,String> {
}
