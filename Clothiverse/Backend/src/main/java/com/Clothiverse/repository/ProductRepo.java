package com.Clothiverse.repository;

import com.Clothiverse.entities.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends MongoRepository<Product, String> {

    //getting by description
    @Query("{'productDescription' : {'$regex' : /?0/}}")
    public List<Product> getByDescription(String desc);

    //getting by name
    @Query("{'productName' : {'$regex' : /[^-]?0/, '$options': 'i'}}")
    public List<Product> getProductByName(String name);

    //getting by category
    @Query("{'categories' : ?0}")
    public List<Product> getProductByCategoryId(ObjectId id);

    //getting by rating
    @Query("{avgRating : { $gte: ?0 }}")
    public List<Product> getProductsByRating(int rating);

    //getting by color
    @Query(value = "{productDetails : ?0}")
    public Product getProductsByColor(ObjectId id);

    //getting by gender
    @Query(value = "{productDetails : ?0}")
    public Product getProductsByGender(ObjectId id);

    //getting by price range
    @Query(value = "{'price' : {'$gt': ?0, '$lt' : ?1}}")
    public List<Product> getProductsByPriceRange(Integer low_price, Integer high_price);

    @Query(value = "{productDetails : ?0}")
    public Product getProductsBySize(ObjectId id);

    @Query("{'productDetails' : ?0}")
    public Product getProductByDetails(ObjectId id);


    @Query(value = "{price : {$lte: ?0}}")
    public List<Product> getProductsByPriceBound(Integer price);

}
