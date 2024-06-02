package com.Clothiverse.repository;

import com.Clothiverse.entities.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderRepo extends MongoRepository<Order,String> {
}
