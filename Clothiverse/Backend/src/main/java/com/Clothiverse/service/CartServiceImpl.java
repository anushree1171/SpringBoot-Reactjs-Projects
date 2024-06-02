package com.Clothiverse.service;


import com.Clothiverse.entities.Cart;
import com.Clothiverse.repository.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    CartRepo cartRepo;


    @Override
    public void addCart(Cart cart) {
        cartRepo.save(cart);
    }

    @Override
    public void addAllCarts(List<Cart> cartList) {
        cartRepo.saveAll(cartList);
    }

    @Override
    public Cart getCartById(String id) {
        return cartRepo.findById(id).orElse(null);
    }

    @Override
    public List<Cart> getAllCarts() {
        return cartRepo.findAll();
    }

    @Override
    public void updateCartById(String id, Cart cart) {
        cart.setCartId(id);
        cartRepo.save(cart);
    }

    @Override
    public void deleteCartById(String id) {
        cartRepo.deleteById(id);
    }
}
