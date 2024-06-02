package com.Clothiverse.service;

import com.Clothiverse.entities.Product;
import org.bson.types.ObjectId;

import java.util.List;

public interface ProductService {

    public void saveProduct(Product product);

    public void saveAllProducts(List<Product> products);

    public Product getProductById(String id);

    public List<Product> getAllProducts();

    public void updateProduct(String id, Product product);

    public void deleteProductById(String id);

    List<Product> getProductByCategoryId(ObjectId id);

    List<Product> getProductsByRating(int rating);

    Product getProductsByColor(ObjectId id);

    Product getProductByGender(ObjectId id);

    List<Product> getProductByPriceRange(Integer low_price, Integer high_price);

    Product getProductBySize(ObjectId id);

    List<Product> getProductByName(String name);

    List<Product> getByDescription(String desc);

    Product getByDetails(ObjectId id);

    List<Product> getProductByPriceBound(Integer price);

}
