package com.Clothiverse.service;


import com.Clothiverse.entities.OrderDetails;

import java.util.List;

public interface OrderDetailsService {

    List<OrderDetails> getAllOrderDetails();

    OrderDetails getOrderDetailsById(String id);

    void saveOrderDetails(OrderDetails orderDetails);

    void deleteOrderDetails(String id);
}
