import React, { useState, useEffect } from 'react'
import "./WishlistComponent.css"
import { MdAddShoppingCart } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import Footer from '../components/Footer';
import Nav from '../Navigation/Nav';

export default function WishlistComponent({ cartDispatch, wishlist, wishlistState, wishlistDispatch }) {
    const [wishlistItems, setWishlistItems] = useState(wishlist);

    useEffect(() => {
        setWishlistItems(wishlist);
    }, [wishlist]);

    const addToCart = (product) => {
        cartDispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromWishlist = (product) => {
        wishlistDispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
    };

    const wishlistBody = () => {
        return wishlistItems.map((product) => {
            const { img, title, newPrice, company, color, category } = product;
            return (
                <div className="w-card" key={product.id}>
                    <div className="image-container">
                        <img src={img} alt={title} />
                    </div>
                    <div className="details-container">
                        <h4>{title}</h4>
                        <p>Category: {category}</p>
                        <p>Brand: {company}</p>
                        <p>Color: {color}</p>
                        <p>Price:<b>${newPrice}</b></p>
                    </div>
                    <div className="wishlist-icons">
                        <MdAddShoppingCart onClick={() => { addToCart(product) }} />
                        <IoTrashOutline onClick={() => { removeFromWishlist(product) }} />
                    </div>
                </div>
            );
        });
    };

    const noItems = () => {
        return (
            <div>
                <h6>No items found in wishlist.</h6>
                <a href='/' className=''>Click here to start shopping</a>
            </div>
        );
    };

    return (
        <div className="wishlist-page">
            <Nav />
            <div className="wishlist-container">
                <div className="wishlist-header">
                    <h1 className='text-left'>My Wishlist</h1>
                </div>
                <div className="wishlist-card-container">
                    {wishlist.length === 0 ? noItems() : wishlistBody()}
                </div>
            </div>
            <Footer className="wishlist-footer" />
        </div>
    );
}
