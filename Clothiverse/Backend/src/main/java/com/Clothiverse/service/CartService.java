package com.Clothiverse.service;


import com.Clothiverse.entities.Cart;

import java.util.List;

public interface CartService {

    public void addCart(Cart cart);

    public void addAllCarts(List<Cart> cartList);

    public Cart getCartById(String id);

    public List<Cart> getAllCarts();

    public void updateCartById(String id, Cart cart);

    public void deleteCartById(String id);
}
