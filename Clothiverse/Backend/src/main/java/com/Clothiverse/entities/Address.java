package com.Clothiverse.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "address")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Address {

    @Id
    String a_id;

    int houseNo;

    String block;

    String apartmentName;

    String streetName;

    String localityName;

    String city;

    String pincode;

    String state;

    String phoneNo;

    String addressType;

}
