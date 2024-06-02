package com.Clothiverse.service;



import com.Clothiverse.entities.OrderDetails;
import com.Clothiverse.repository.OrderDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsServiceImpl implements OrderDetailsService{

    @Autowired
    OrderDetailsRepo orderDetailsRepo;

    @Override
    public List<OrderDetails> getAllOrderDetails() {
        return orderDetailsRepo.findAll();
    }

    @Override
    public OrderDetails getOrderDetailsById(String id) {
        return orderDetailsRepo.findById(id).orElse(null);
    }

    @Override
    public void saveOrderDetails(OrderDetails orderDetails) {
        orderDetailsRepo.save(orderDetails);
    }

    @Override
    public void deleteOrderDetails(String id) {
        orderDetailsRepo.deleteById(id);
    }
}
