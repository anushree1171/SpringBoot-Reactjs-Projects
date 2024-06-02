package com.Clothiverse.service;


import com.Clothiverse.entities.Product;
import com.Clothiverse.entities.Review;
import com.Clothiverse.exceptions.ProductNotFoundException;
import com.Clothiverse.repository.ProductRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepo productRepo;


    @Override
    public void saveProduct(Product product) {
        product.setProductName(product.getProductName().replace('-', ' '));
        product.setAvgRating(getAvgRating(product));
        productRepo.save(product);
    }

    private Double getAvgRating(Product product){
        Double sum = 0.0;
        for(Review r : product.getReviews()){
            sum += r.getRating();
        }
        return (sum/product.getReviews().size());
    }

    @Override
    public void saveAllProducts(List<Product> products) {
        for(Product product : products){
            product.setProductName(product.getProductName().replace('-', ' '));
            product.setAvgRating(getAvgRating(product));
        }
        productRepo.saveAll(products);
    }

    @Override
    public Product getProductById(String id) {
        return productRepo.findById(id).orElseThrow(()-> new ProductNotFoundException("Product of id: "+id+" not found."));
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public void updateProduct(String id, Product product) {
        product.setProductId(id);
        productRepo.save(product);
    }

    @Override
    public void deleteProductById(String id) {
        productRepo.deleteById(id);
    }

    @Override
    public List<Product> getProductByCategoryId(ObjectId id) {
        return productRepo.getProductByCategoryId(id);
    }

    @Override
    public List<Product> getProductsByRating(int rating) {
        return productRepo.getProductsByRating(rating);
    }

    @Override
    public Product getProductsByColor(ObjectId id) {
        return productRepo.getProductsByColor(id);
    }

    @Override
    public Product getProductByGender(ObjectId id) {
        return productRepo.getProductsByGender(id);
    }

    @Override
    public List<Product> getProductByPriceRange(Integer low_price, Integer high_price) {
        return productRepo.getProductsByPriceRange(low_price, high_price);
    }

    @Override
    public Product getProductBySize(ObjectId id) {
        return productRepo.getProductsBySize(id);
    }

    @Override
    public List<Product> getProductByName(String name) {
        return productRepo.getProductByName(name);
    }

    @Override
    public List<Product> getByDescription(String desc) {
        return productRepo.getByDescription(desc);
    }

    @Override
    public Product getByDetails(ObjectId id) {
        return productRepo.getProductByDetails(id);
    }

    @Override
    public List<Product> getProductByPriceBound(Integer price) {
        return productRepo.getProductsByPriceBound(price+5);
    }


}
