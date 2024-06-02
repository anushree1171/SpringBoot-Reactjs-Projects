package com.Clothiverse.service;


import com.Clothiverse.entities.ProductDetails;

import java.util.List;

public interface ProductDetailsService {

    public void saveProductDetails(ProductDetails productDetails);

    public void saveAllProductDetails(List<ProductDetails> productDetailsList);

    public ProductDetails getProductDetailsById(String id);

    List<ProductDetails> getAllProductDetails();

    public void updateProductDetailsById(String id, ProductDetails productDetails);

    public void deleteProductDetailsById(String id);

    public List<String> getProductDetailsListByColor(String color);

    public List<String> getProductDetailsListByGender(String gender);

    public List<String> getProductDetailsListBySize(String size);

    public List<String> getProductDetailsByProdDetails(String details);

    public List<String> getProductDetailsListByOtherInfo(String info);

}
