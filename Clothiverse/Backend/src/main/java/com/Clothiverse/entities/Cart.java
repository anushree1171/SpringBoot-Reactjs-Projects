package com.Clothiverse.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.math.BigDecimal;
import java.util.List;

@Document(collection = "Carts")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Cart {

    @Id
    String cartId;

    @DocumentReference(collection = "Products")
    List<Product> products;

    BigDecimal subtotal;

}
