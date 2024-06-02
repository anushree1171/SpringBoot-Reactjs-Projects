import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WishlistComponent from "./Wishlist/WishlistComponent"
import CartComponent from "./Cart/CartComponent"
import "./index.css"

import { WishlistProvider, useWishlist } from './Wishlist/WishlistContext';
import { CartProvider, useCart } from './Cart/CartContext';
import ProductComponent from './single_product/ProductComponent';
import DeliveryDetails from './delivery/DeliveryDetails';
import AddressForm from './components/AddressForm';
import { AddressProvider, useAddress } from './delivery/AddressContext';
import OrderSummary from './billingAndPayment/OrderSummary';
import RegisterPage from './authentication/RegisterPage';
import LoginPage from './authentication/LoginPage';
import AuthProvider from 'react-auth-kit/AuthProvider';
import createStore from 'react-auth-kit/createStore';
import RequireAuth from './authentication/RequireAuth';
import { UserProvider } from './authentication/UserContext';

function Index() {
  const { state: cartState, dispatch: cartDispatch} = useCart();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();

  const cartItems = cartState.cart;
  const [wishlistItems, setWishlistItems] = useState(wishlistState.wishlist);

  const [singleProduct, setSingleProduct] = useState({});

  const [selectedAddress, setSelectedAddress] = useState({});

  const receiveSingleProduct = product => {
    setSingleProduct(product);
  }

  const makeSelectedAddress = address => {
    setSelectedAddress(address);
  }

  useEffect(() => {
    setWishlistItems(wishlistState.wishlist);
  }, [wishlistState]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/' element={<App receiveSingleProduct={receiveSingleProduct} cartState={cartState} cartDispatch={cartDispatch} wishlistState={wishlistState} wishlistDispatch={wishlistDispatch} />} />
          <Route path='/product/:product_id' element={<ProductComponent singleProduct={singleProduct} cartDispatch={cartDispatch} wishlistDispatch={wishlistDispatch}/>}></Route>
          <Route path='/wishlist' element={<WishlistComponent cartDispatch={cartDispatch} wishlistDispatch={wishlistDispatch} wishlist={wishlistItems} wishlistState={wishlistState}  />} />
          <Route path='/cart' element={<CartComponent cart={cartItems} cartState={cartState} cartDispatch={cartDispatch}/>} />
          <Route path='/delivery-details' element={<DeliveryDetails makeSelectedAddress={makeSelectedAddress}/>} />
          {/* <Route path='/add-address' element={<AddressForm />} />
          <Route path='/order-summary' element={<OrderSummary cartItems={cartItems} cartState={cartState} selectedAddress={selectedAddress}/>} /> */}
          <Route path='/add-address' element={
            <RequireAuth loginPath='/login'>
              <AddressForm />
            </RequireAuth>
          } />
          <Route path='/order-summary' element={
            <RequireAuth loginPath='/login'>
              <OrderSummary cartItems={cartItems} cartState={cartState} selectedAddress={selectedAddress} />
            </RequireAuth>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(
  // <AddressProvider>
  //   <CartProvider>
  //     <WishlistProvider>
  //       <Index />
  //     </WishlistProvider>
  //   </CartProvider>
  // </AddressProvider>,
  // document.getElementById('root')

  <AuthProvider
    store={createStore({
      authType: "cookie",
      authName: "_auth",
      cookieDomain: window.location.hostname, 
      cookieSecure: window.location.protocol === "https:"
    })}
  >
    <AddressProvider>
      <CartProvider>
        <WishlistProvider>
          <UserProvider>
            <Index />
          </UserProvider>
        </WishlistProvider>
      </CartProvider>
    </AddressProvider>
  </AuthProvider>,
  document.getElementById('root')
);

