package com.Clothiverse.controller;


import com.Clothiverse.entities.ProductDetails;
import com.Clothiverse.service.ProductDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class ProductDetailsController {

    @Autowired
    ProductDetailsService productDetailsService;

    @PostMapping("/saveProductDetails")
    public void save(@RequestBody ProductDetails productDetails){
        productDetailsService.saveProductDetails(productDetails);
    }

    @PostMapping("/saveAllProductDetails")
    public void saveAll(@RequestBody List<ProductDetails> productDetailsList){
        productDetailsService.saveAllProductDetails(productDetailsList);
    }

    @GetMapping("/getProductDetailsById/{id}")
    public ProductDetails getById(@PathVariable String id){
        return productDetailsService.getProductDetailsById(id);
    }

    @GetMapping("/getAllProductDetails")
    public List<ProductDetails> getAll(){
        return productDetailsService.getAllProductDetails();
    }

    @PutMapping("/updateProductDetailsById/{id}")
    public void update(@PathVariable String id, @RequestBody ProductDetails productDetails){
        productDetailsService.updateProductDetailsById(id, productDetails);
    }

    @DeleteMapping("/deleteProductDetailsById")
    public void deleteProductDetailsById(@PathVariable String id){
        productDetailsService.deleteProductDetailsById(id);
    }

    @GetMapping("/getAllColors")
    public Set<String> getAllColors(){
        Set<String> colors = new HashSet<>();
        for(ProductDetails productDetails : productDetailsService.getAllProductDetails()){
            for(String color : productDetails.getColors()){
                colors.add(color);
            }
        }

        return colors;
    }

    @GetMapping("/getProductDetailsListByColor/{color}")
    public List<String> getProductDetailsListByColor(@PathVariable String color){
        return productDetailsService.getProductDetailsListByColor(color);
    }

    @GetMapping("/getProductDetailsListByGender/{gender}")
    public List<String> getProductDetailsListByGender(@PathVariable String gender){
        return productDetailsService.getProductDetailsListByGender(gender);
    }

    @GetMapping("/getProductDetailsListBySize/{size}")
    public List<String> getProductDetailsListBySize(@PathVariable String size){
        return productDetailsService.getProductDetailsListBySize(size);
    }
}
