package com.Clothiverse.service;


import com.Clothiverse.entities.ProductDetails;
import com.Clothiverse.repository.ProductDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductDetailsServiceImpl implements ProductDetailsService {

    @Autowired
    ProductDetailsRepo productDetailsRepo;

    @Override
    public void saveProductDetails(ProductDetails productDetails) {
        productDetailsRepo.save(productDetails);
    }


    @Override
    public void saveAllProductDetails(List<ProductDetails> productDetailsList) {
        productDetailsRepo.saveAll(productDetailsList);
    }

    @Override
    public ProductDetails getProductDetailsById(String id) {
        return productDetailsRepo.findById(id).orElse(null);
    }

    @Override
    public List<ProductDetails> getAllProductDetails() {
        return productDetailsRepo.findAll();
    }

    @Override
    public void updateProductDetailsById(String id, ProductDetails productDetails) {
        productDetails.setProductDetailsId(id);
        productDetailsRepo.save(productDetails);
    }

    @Override
    public void deleteProductDetailsById(String id) {
        productDetailsRepo.deleteById(id);
    }

    @Override
    public List<String> getProductDetailsListByColor(String color) {
        return productDetailsRepo.getProductDetailsListByColor(color);
    }

    @Override
    public List<String> getProductDetailsListByGender(String gender) {
        return productDetailsRepo.getProductDetailsListByGender(gender);
    }

    @Override
    public List<String> getProductDetailsListBySize(String size) {
        return productDetailsRepo.getProductDetailsListBySize(size);
    }

    @Override
    public List<String> getProductDetailsByProdDetails(String details) {
        return productDetailsRepo.getByProductDetails(details);
    }

    @Override
    public List<String> getProductDetailsListByOtherInfo(String info) {
        return productDetailsRepo.getByOtherInformation(info);
    }


}
