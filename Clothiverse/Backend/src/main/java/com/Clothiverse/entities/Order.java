package com.Clothiverse.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;


@Document(collection = "orders")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@ToString
public class Order {

    @Id
    String orderId;

    Customer customer;

    String status;

    Date orderDate;

    BigDecimal totalAmount;

    String paymentMode;

    @DocumentReference(collection = "order_details")
    List<OrderDetails> orderDetails;
}
