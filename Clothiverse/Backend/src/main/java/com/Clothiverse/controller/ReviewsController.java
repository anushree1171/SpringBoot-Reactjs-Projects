package com.Clothiverse.controller;


import com.Clothiverse.entities.Review;
import com.Clothiverse.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewsController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/saveReview")
    public void saveReview(@RequestBody Review review){
        reviewService.saveReview(review);
    }

    @PostMapping("/saveAllReviews")
    public void saveAllReview(@RequestBody List<Review> reviews){
        reviewService.saveAllReviews(reviews);
    }

    @GetMapping("/getReviewById/{id}")
    public Review get(@PathVariable String id){
        return reviewService.getReviewById(id);
    }

    @GetMapping("/getAllReviews")
    public List<Review> getAllReviews(){
        return reviewService.getAllReviews();
    }

    @PutMapping("/updateReviewById/{id}")
    public void update(@PathVariable String id, @RequestBody Review review){
        reviewService.updateReviewById(id, review);
    }

    @DeleteMapping("/deleteReviewById/{id}")
    public void delete(@PathVariable String id){
        reviewService.deleteReviewById(id);
    }
}
