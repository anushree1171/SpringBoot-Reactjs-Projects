package com.Clothiverse.entities;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "order_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class OrderDetails {

    @Id
    String orderDetailsId;

    @DocumentReference(collection = "Products")
    Product product;

    int quantity;
}
