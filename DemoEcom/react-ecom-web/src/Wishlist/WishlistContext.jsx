import React, {createContext, useContext, useReducer} from "react";

const WishlistContext = createContext();

const initalWishlist = {
    wishlist : []
};

const wishlistReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_WISHLIST': 
            // Check if the product is already present in the wishlist
            const isProductInWishlist = state.wishlist.some(item => item.product_id === action.payload.product_id);
            if (isProductInWishlist) {
                return state; // If already present, do not add again
            }
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            };

        case 'REMOVE_FROM_WISHLIST':
            // Check if the item is present in the wishlist
            const isItemInWishlist = state.wishlist.some(item => item.product_id === action.payload.product_id);
            if (!isItemInWishlist) {
                return state; // If not present, do not remove
            }
            return {
                ...state,
                wishlist: state.wishlist.filter(item => item.product_id !== action.payload.product_id)
            };

        default:
            return state;
    }
}

export const WishlistProvider = ({children}) =>{
    const [state, dispatch] = useReducer(wishlistReducer, initalWishlist);

    return (
        <WishlistContext.Provider value={{state, dispatch}}>
            {children}
        </WishlistContext.Provider>
    );
};


export const useWishlist = () => useContext(WishlistContext); 