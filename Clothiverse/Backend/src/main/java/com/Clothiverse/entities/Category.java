package com.Clothiverse.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Categories")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    String categoryId;
    String categoryName;
}
