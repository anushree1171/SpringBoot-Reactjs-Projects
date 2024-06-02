package com.Clothiverse.service;


import com.Clothiverse.entities.Category;
import com.Clothiverse.repository.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    CategoryRepo categoryRepo;

    @Override
    public void saveCategory(Category category) {
        categoryRepo.save(category);
    }

    @Override
    public void saveAllCategories(List<Category> categoryList) {
        categoryRepo.saveAll(categoryList);
    }

    @Override
    public Category getCategoryById(String id) {
        return categoryRepo.findById(id).orElse(null);
    }


    @Override
    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    @Override
    public void updateCategoryById(String id, Category category) {
        category.setCategoryId(id);
        categoryRepo.save(category);
    }

    @Override
    public void deleteCategoryById(String id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public String getCategoryId(String category) {
        return categoryRepo.getCategoryId(category);
    }


}
