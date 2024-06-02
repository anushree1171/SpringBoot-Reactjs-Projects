package com.Clothiverse.controller;


import com.Clothiverse.entities.Category;
import com.Clothiverse.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@CrossOrigin("*")
@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @PostMapping("/saveCategory")
    public void save(@RequestBody Category category){
        categoryService.saveCategory(category);
    }

    @PostMapping("/saveAllCategories")
    public void saveAllCategories(@RequestBody List<Category> categories){
        categoryService.saveAllCategories(categories);
    }

    @GetMapping("/getCategoryById/{id}")
    Category get(@PathVariable String id){
        return categoryService.getCategoryById(id);
    }

    @GetMapping("/getAllCategories")
    public Set<String> getAll(){
        List<Category> categoryList = categoryService.getAllCategories();

        Set<String> categorySet = new HashSet<>();
        for(Category category : categoryList){
            categorySet.add(category.getCategoryName());
        }

        return categorySet;
    }

    @PutMapping("/updateCategoryById/{id}")
    void update(@PathVariable String id, @RequestBody Category category){
        categoryService.updateCategoryById(id, category);
    }

    @DeleteMapping("/deleteCategoryById/{id}")
    void update(@PathVariable String id){
        categoryService.deleteCategoryById(id);
    }

    @GetMapping("/getCategoryId/{categoryName}")
    public String getCategoryId(@PathVariable String categoryName){
        return categoryService.getCategoryId(categoryName);
    }
}
