package com.Clothiverse.controller;


import com.Clothiverse.entities.Product;
import com.Clothiverse.service.CategoryService;
import com.Clothiverse.service.ProductDetailsService;
import com.Clothiverse.service.ProductService;
import com.Clothiverse.service.ReviewService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    ProductDetailsService productDetailsService;

    @Autowired
    ReviewService reviewService;

    @PostMapping("/saveAllProducts")
    public void saveAll(@RequestBody List<Product> products){
        productService.saveAllProducts(products);
    }

    @PostMapping("/saveProduct")
    public void save(@RequestBody Product product){
        productService.saveProduct(product);
    }

    @GetMapping("/getAllProducts/{id}")
    public Product getById(@PathVariable String id){
        return productService.getProductById(id);
    }

    @GetMapping("/getAll")
    public List<Product> getAll(){
        return productService.getAllProducts();
    }

    @PutMapping("/updateProductById/{id}")
    public void update(@PathVariable String id, @RequestBody Product product){
        productService.updateProduct(id, product);
    }

    @DeleteMapping("/deleteProductById/{id}")
    public void delete(@PathVariable String id){
        productService.deleteProductById(id);
    }

    @GetMapping("/getProductsByCategory/{categoryName}")
    public List<Product> getProductsByCategory(@PathVariable String categoryName){
        String id = categoryService.getCategoryId(categoryName);
        ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));

        return productService.getProductByCategoryId(id1);

    }

    @GetMapping("/getProductsByRating/{rating}")
    public List<Product> getProductsByRating(@PathVariable Integer rating){
        return productService.getProductsByRating(rating);
    }

    @GetMapping("/getProductsByColor/{color}")
    public List<Product> getProductsByColor(@PathVariable String color){
        List<String> ids = productDetailsService.getProductDetailsListByColor(color);
        List<Product> productListByColor = new ArrayList<>();

        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));
            productListByColor.add(productService.getProductsByColor(id1));
        }

        return productListByColor;
    }

    @GetMapping("/getProductsByGender/{gender}")
    public List<Product> getProductsByGender(@PathVariable String gender){
        List<String> ids = productDetailsService.getProductDetailsListByGender(gender);
        List<Product> productListByGender = new ArrayList<>();
        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18,id.length()-3));
            productListByGender.add(productService.getProductByGender(id1));
        }
        return productListByGender;
    }

    @GetMapping("/getProductByPrice/{lowPrice}/{highPrice}")
    public List<Product> getProductsByPrice(@PathVariable("lowPrice") Integer lowPrice, @PathVariable("highPrice") Integer highPrice){

        return productService.getProductByPriceRange(lowPrice, highPrice);
    }

    @GetMapping("/getProductBySize/{size}")
    public List<Product> getProductBySize(@PathVariable String size){
        List<String> ids = productDetailsService.getProductDetailsListBySize(size);
        List<Product> productListBySize = new ArrayList<>();
        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18,id.length()-3));
            productListBySize.add(productService.getProductBySize(id1));
        }
        return productListBySize;
    }

    @GetMapping("/getProductByName/{name}")
    public List<Product> getProductsByName(@PathVariable String name){
        return productService.getProductByName(name);
    }

    @GetMapping("/getProductByDesciption/{description}")
    public List<Product> getProductByDesciption(@PathVariable String description){
        return productService.getByDescription(description);
    }

    @GetMapping("/getByProductDetails/{details}")
    public List<Product> getByProductDetails(@PathVariable String details){
        List<String> ids = productDetailsService.getProductDetailsByProdDetails(details);
        List<Product> productListByDetails = new ArrayList<>();

        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));
            productListByDetails.add(productService.getByDetails(id1));
        }

        return productListByDetails;
    }

    @GetMapping("/getByOtherInformation/{info}")
    public List<Product> getByOtherInformation(@PathVariable String info){
        List<String> ids = productDetailsService.getProductDetailsListByOtherInfo(info);
        List<Product> productListByDetails = new ArrayList<>();

        for(String id : ids){
            ObjectId id1 = new ObjectId(id.substring(18, id.length()-3));
            productListByDetails.add(productService.getByDetails(id1));
        }

        return productListByDetails;
    }

}
