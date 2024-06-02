package com.Clothiverse.entities;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "ProductDetails")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductDetails {

    @Id
    String productDetailsId;
    List<String> colors;
    List<String> size;
    Boolean delivery;
    String gender;
    List<String> productDetails;
    List<String> otherInformation;

}
