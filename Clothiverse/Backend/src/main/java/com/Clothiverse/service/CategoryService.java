package com.Clothiverse.service;


import com.Clothiverse.entities.Category;

import java.util.List;

public interface CategoryService {

     void saveCategory(Category category);

     void saveAllCategories(List<Category> categoryList);

     Category getCategoryById(String id);

     List<Category> getAllCategories();

     void updateCategoryById(String id, Category category);

     void deleteCategoryById(String id);

     String getCategoryId(String category);


}
