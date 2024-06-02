package com.Clothiverse.controller;


import com.Clothiverse.entities.Cart;
import com.Clothiverse.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {

    @Autowired
    CartService cartService;

    @PostMapping("/saveCartItem")
    public void save(@RequestBody Cart cart){
        cartService.addCart(cart);
    }

    @PostMapping("/saveAllCartItems")
    public void saveAll(@RequestBody List<Cart> cartList){
        cartService.addAllCarts(cartList);
    }

    @GetMapping("/getCartItemById/{id}")
    public Cart getById(@PathVariable String id){
        return cartService.getCartById(id);
    }

    @GetMapping("/getAllCartItems")
    public List<Cart> getAll(){
        return cartService.getAllCarts();
    }

    @PutMapping("/updateCartItemById/{id}")
    public void update(@PathVariable String id, @RequestBody Cart cart){
        cartService.updateCartById(id, cart);
    }

    @DeleteMapping("/deleteCartById/{id}")
    public void deleteCartById(@PathVariable String id){
        cartService.deleteCartById(id);
    }
}
