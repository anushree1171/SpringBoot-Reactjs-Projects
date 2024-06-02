package com.Clothiverse.controller;



import com.Clothiverse.entities.Order;
import com.Clothiverse.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping("/saveOrder")
    public String saveOrder(@RequestBody Order order){
        orderService.saveOrder(order);
        return "Success";
    }

    @GetMapping("/getAllOrders")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    @GetMapping("/getOrder/{id}")
    public Order getOrderById(@PathVariable String id){
        return orderService.getOrderById(id);
    }

    @PutMapping("/updateOrder/{id}")
    public String updateOrderById(@PathVariable String id, @RequestBody Order order){
        orderService.saveOrder(order);
        return "Success";
    }

    @DeleteMapping("/deleteOrder/{id}")
    public String deleteOrderById(@PathVariable String id){
        orderService.deleteOrderById(id);
        return "Success";
    }

}
