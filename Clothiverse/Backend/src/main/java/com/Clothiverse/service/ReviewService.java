package com.Clothiverse.service;


import com.Clothiverse.entities.Review;

import java.util.List;

public interface ReviewService {

    void saveReview(Review review);

    public void saveAllReviews(List<Review> reviews);

    public Review getReviewById(String id);

    List<Review> getAllReviews();

    public void updateReviewById(String id, Review review);

    public void deleteReviewById(String id);


}
