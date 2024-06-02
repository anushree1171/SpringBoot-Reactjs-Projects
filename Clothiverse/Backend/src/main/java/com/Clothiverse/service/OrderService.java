package com.Clothiverse.service;


import com.Clothiverse.entities.Order;

import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();

    Order getOrderById(String id);

    void saveOrder(Order order);

    void deleteOrderById(String id);
}
