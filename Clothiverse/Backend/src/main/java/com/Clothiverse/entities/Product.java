package com.Clothiverse.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;


@Document(collection = "Products")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Product {

    @Id
    String productId;
    String productName;
    String productDescription;
    Double price;
    Boolean available;
    Integer quantityAvailable;
//    String occasion;

    @DocumentReference(collection = "Categories")
    List<Category> categories; //one to many uni-directional

    @DocumentReference(collection = "ProductDetails")
    ProductDetails productDetails; //one to one uni-directional

    @DocumentReference(collection = "Reviews")
    List<Review> reviews; //one to many uni-directional

    Double avgRating;

}
