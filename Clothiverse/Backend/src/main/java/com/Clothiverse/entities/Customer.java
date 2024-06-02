package com.Clothiverse.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;
import java.util.List;

@Document(collection = "customer_details")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Customer {

    @Id
    private String c_id;

    String firstName;

    String lastName;

    @Indexed(unique = true)
    String emailId;

    @Indexed(unique = true)
    String username;

    String password;

    String gender;

    Date dob;

    @DocumentReference(collection = "address")
    List<Address> addresses;

    @DocumentReference(collection = "Carts")
    Cart cart;

    @DocumentReference(collection = "orders")
    List<Order> orders;


}
