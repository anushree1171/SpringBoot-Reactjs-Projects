package com.Clothiverse.repository;

import com.Clothiverse.entities.Category;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends MongoRepository<Category, String> {


    @Query(value="{categoryName : ?0}", fields = "{_id:1}")
    public String getCategoryId(String categoryName);

}
