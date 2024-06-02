package com.Clothiverse.service;


import com.Clothiverse.entities.Review;
import com.Clothiverse.repository.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    ReviewRepo reviewRepo;


    @Override
    public void saveReview(Review review) {
        reviewRepo.save(review);
    }

    @Override
    public void saveAllReviews(List<Review> reviews) {
        reviewRepo.saveAll(reviews);
    }

    @Override
    public Review getReviewById(String id) {
        return reviewRepo.findById(id).orElse(null);
    }

    @Override
    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }

    @Override
    public void updateReviewById(String id, Review review) {
        review.setReviewId(id);
        reviewRepo.save(review);
    }

    @Override
    public void deleteReviewById(String id) {
        reviewRepo.deleteById(id);
    }
}
