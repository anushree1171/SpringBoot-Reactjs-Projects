package com.Clothiverse.controller;


import com.Clothiverse.entities.Product;
import com.Clothiverse.service.CategoryService;
import com.Clothiverse.service.ProductDetailsService;
import com.Clothiverse.service.ProductService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class SearchController {

    @Autowired
    ProductService productService;

    @Autowired
    ProductDetailsService productDetailsService;

    @Autowired
    CategoryService categoryService;

    private final Set<Product> productSet = new HashSet<>();

    //utility methods
    public void getByName(String name){
        productSet.addAll(productService.getProductByName(name));
    }

    public void getByDescription(String desc){
        productSet.addAll(productService.getByDescription(desc));
    }

    public void getProductByPrice(String price){

        if(!productService.getProductByPriceBound(Integer.parseInt(price)).isEmpty()){
            System.out.println(productService.getProductByPriceBound(Integer.parseInt(price)));
            productSet.addAll(productService.getProductByPriceBound(Integer.parseInt(price)));
            return;
        }
        productSet.clear();

    }

    public void getByCategory(String category){
        String id = categoryService.getCategoryId(category);
        if(id != null){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));

            productSet.addAll(productService.getProductByCategoryId(id1));
        }
    }

    public void getProductByColor(String color){
        List<String> ids = productDetailsService.getProductDetailsListByColor(color);
        List<Product> productListByColor = new ArrayList<>();

        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));
            productListByColor.add(productService.getProductsByColor(id1));
        }

        productSet.addAll(productListByColor);
    }

    public void getProductByGender(String gender){
        List<String> ids = productDetailsService.getProductDetailsListByGender(gender);
        List<Product> productListByGender = new ArrayList<>();
        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18,id.length()-3));
            productListByGender.add(productService.getProductByGender(id1));
        }
        productSet.addAll(productListByGender);
    }

    public void getByProductByProd_details(String query){
        List<String> ids = productDetailsService.getProductDetailsByProdDetails(query);
        List<Product> productListByDetails = new ArrayList<>();

        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));
            productListByDetails.add(productService.getByDetails(id1));
        }

        productSet.addAll(productListByDetails);
    }

    public void getProductByOtherInformation(String query){
        List<String> ids = productDetailsService.getProductDetailsListByOtherInfo(query);
        List<Product> productListByDetails = new ArrayList<>();

        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));
            productListByDetails.add(productService.getByDetails(id1));
        }

        productSet.addAll(productListByDetails);
    }


    @GetMapping("/search/{query:[a-zA-Z0-9 &+-]*}")
    public Set<Product> getProductSet(@PathVariable String query){
        System.out.println(query);
        String[] queryArr = query.split(" ");
        List<String> queryArray = Arrays.asList(queryArr);

        for(String q : queryArray){
            getByName(q);
            getByDescription(q);

            if(q.matches("-?\\d+(\\.\\d+)?")){
                getProductByPrice(q);
            }

            getByCategory(q);
            getProductByColor(q);
            getProductByGender(q);
            getByProductByProd_details(q);
            getProductByOtherInformation(q);
        }

        return productSet;
    }
}
