package com.Clothiverse.repository;

import com.Clothiverse.entities.ProductDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDetailsRepo extends MongoRepository<ProductDetails, String> {


    @Query(value = "{ colors : ?0}", fields = "{_id : 1}")
    public List<String> getProductDetailsListByColor(String color);

    @Query(value = "{gender : ?0}",fields = "{_id : 1}")
    public List<String> getProductDetailsListByGender(String gender);

    @Query(value = "{size : ?0}", fields = "{_id : 1}")
    public List<String> getProductDetailsListBySize(String size);

    @Query(value = "{'productDetails' : {'$regex' : /?0/}}", fields = "{_id : 1}")
    public List<String> getByProductDetails(String details);

    @Query(value = "{'otherInformation' : {'$regex' : /?0/}}", fields = "{_id : 1}")
    public List<String> getByOtherInformation(String info);
}
