package com.Clothiverse.service;


import com.Clothiverse.entities.Order;
import com.Clothiverse.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    OrderRepo orderRepo;

    @Override
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    @Override
    public Order getOrderById(String id) {
        return orderRepo.findById(id).orElse(null);
    }

    @Override
    public void saveOrder(Order order) {
        orderRepo.save(order);
    }

    @Override
    public void deleteOrderById(String id) {
        orderRepo.deleteById(id);
    }
}
