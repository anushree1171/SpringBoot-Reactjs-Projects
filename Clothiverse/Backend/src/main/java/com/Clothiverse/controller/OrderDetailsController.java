package com.Clothiverse.controller;



import com.Clothiverse.entities.OrderDetails;
import com.Clothiverse.service.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderDetailsController {

    @Autowired
    OrderDetailsService orderDetailsService;

    @PostMapping("/saveOrderDetails")
    public String saveOrderDetails(@RequestBody OrderDetails orderDetails){
        orderDetailsService.saveOrderDetails(orderDetails);
        return "Success";
    }

    @GetMapping("/getAllOrderDetails")
    public List<OrderDetails> getAllOrderDetails(){
        return orderDetailsService.getAllOrderDetails();
    }

    @GetMapping("/getOrderDetails/{id}")
    public OrderDetails getOrderDetailsById(@PathVariable String id){
        return orderDetailsService.getOrderDetailsById(id);
    }

    @PutMapping("/updateOrderDetails/{id}")
    public String updateOrderDetailsById(@PathVariable String id,@RequestBody OrderDetails orderDetails){
        orderDetailsService.saveOrderDetails(orderDetails);
        return "Success";
    }

    @DeleteMapping("/deleteOrderDetails/{id}")
    public String deleteOrderDetailsById(@PathVariable String id){
        orderDetailsService.deleteOrderDetails(id);
        return "Success";
    }
}
