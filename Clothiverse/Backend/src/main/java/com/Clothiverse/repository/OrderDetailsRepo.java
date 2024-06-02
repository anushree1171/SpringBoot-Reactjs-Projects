package com.Clothiverse.repository;

import com.Clothiverse.entities.OrderDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface OrderDetailsRepo extends MongoRepository<OrderDetails, String> {
}
