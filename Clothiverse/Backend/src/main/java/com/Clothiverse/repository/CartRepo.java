package com.Clothiverse.repository;


import com.Clothiverse.entities.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CartRepo extends MongoRepository<Cart, String> {
}
