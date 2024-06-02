import React, {createContext, useReducer, useContext} from "react";
import productsData from "../db/data";

const CartContext = createContext();

const initialCart = {
    cart : [],
    products : productsData,
    cartTotal : 0,
    cartSize : 0
};

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART': 
            const existingProductIndex = state.cart.findIndex(item=>item.product_id === action.payload.product_id);

            if(existingProductIndex!==-1){
                const updatedCart = state.cart.map(item => {
                    if(item.product_id === action.payload.product_id){
                        return {...item, cart_quantity:item.cart_quantity+1}
                    }

                    return item;
                });

                return {
                    ...state, 
                    cart:updatedCart,
                    cartTotal : state.cartTotal + ( action.payload.newPrice || 0),
                    products : state.products.map( product => {
                        if(action.payload.product_id === product.product_id){
                            return {...product, available_quantity: product.available_quantity-1};
                        }

                        return product;
                    }),
                    cartSize : state.cartSize+1
                };
            }
            else{
                return {
                    ...state, 
                    cart : [...state.cart, {...action.payload, cart_quantity : 1}],
                    cartTotal : state.cartTotal + ( action.payload.newPrice || 0),
                    products : state.products.map(product => {
                        if (product.product_id === action.payload.product_id) {
                          return { ...product, available_quantity: product.available_quantity - 1 };
                        }
                        return product;
                    }), 
                    cartSize : state.cartSize+1
                };
            }

        case 'REMOVE_FROM_CART':
            const removedProductIndex = state.cart.findIndex(item => item.product_id === action.payload.product_id);

            if (removedProductIndex === -1) {
                return state; 
            }

            const removedProduct = state.cart[removedProductIndex];

            let updatedCart;
            if (removedProduct.cart_quantity === 1) {
                updatedCart = state.cart.filter(item => item.product_id !== action.payload.product_id);
            } else {
                updatedCart = state.cart.map(item => {
                    if (item.product_id === action.payload.product_id) {
                        return { ...item, cart_quantity: item.cart_quantity - 1 };
                    }
                    return item;
                });
            }

            const updatedTotal = state.cartTotal - (removedProduct.newPrice || 0);
            const updatedProducts = state.products.map(product => {
                if (product.product_id === action.payload.product_id) {
                    return {
                        ...product,
                        available_quantity: product.available_quantity + 1,
                    };
                }
                return product;
            });

            return {
                ...state,
                cart: updatedCart,
                cartTotal: updatedTotal,
                products: updatedProducts,
            };

        case 'REMOVE_ALL_FROM_CART':
            const removeProductIndex = state.cart.findIndex(item => item.product_id === action.payload.product_id);

                if (removeProductIndex === -1) {
                  return state; 
                }

                const removeProduct = state.cart[removeProductIndex];
          
                const updateTotal = state.cartTotal - ((action.payload.newPrice || 0) * action.payload.cart_quantity);
                const updateCart = state.cart.filter(item => item.product_id !== action.payload.product_id);
                const updateProducts = state.products.map(product => {
                  if (product.product_id === action.payload.product_id) {
                    return {
                      ...product,
                      available_quantity: product.available_quantity + removeProduct.cart_quantity,
                      cart_quantity: 0 
                    };
                  }
                  return product;
                });
          
                return {
                  ...state,
                  cart: updateCart,
                  products: updateProducts,
                  cartTotal:updateTotal,
                  cartSize : state.cartSize-1
                };
          

        default : return state;
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <CartContext.Provider value={{state, dispatch}} >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext); 
