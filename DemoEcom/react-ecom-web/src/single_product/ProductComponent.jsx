import React from 'react'
import Nav from '../Navigation/Nav'
import { FaStar } from "react-icons/fa";
import { PiUserCircleLight } from "react-icons/pi";

import './ProductComponent.css'

export default function ProductComponent({singleProduct}) {

  const {product_id, img, title, stars, reviews, prevPrice, newPrice, company, color, category} = singleProduct;

  const currentYear = Date.now().currentYear;

  //cart
  const addToCart = (product) => {
    cartDispatch({type:'ADD_TO_CART', payload:product});
  };

  //wishlist
  const addToWishlist = (product) => {
    wishlistDispatch({type:'ADD_TO_WISHLIST', payload:product});
  };

  function renderStars(){
    const starArr = [];
    for(let i=0; i<stars; i++){
      starArr.push(<FaStar key={i}/>);
    }

    return <>{starArr}</>
  }

  return (
    <>
      <Nav />
      <div className="product-details">
        <div className="prod-title">
          <h2>{title}</h2>
        </div>
        <div className="product-image"> 
          <img src={img} alt={title} />
        </div>
        <div className="product-info">
          <ul>
            <li>Company: {company}</li>
            <li>Color: {color}</li>
            <li>Category: {category}</li>
            <li>MRP: ${prevPrice}</li>
            <li>Price: ${newPrice}</li>
          </ul>
          <div className="buttons">
          <button className="prod-button" onClick={() => addToWishlist(singleProduct)}>Add to Wishlist</button>
          <button className="prod-button" onClick={() => addToCart(singleProduct)}>Add to Cart</button>
          </div>
        </div>
        <div className="product-reviews">
          <div>
            <p>Rating: &nbsp;
              {
                renderStars()
              }
            </p>
            <ul>
              <p>Product reviews:</p>
              {
                reviews.map(
                  (review, index) => {
                      return (
                          <li key={index}><PiUserCircleLight className='rev-icon' /> &nbsp; {review}</li>
                      )
                  }
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© {currentYear} Sonic Shoes. All rights reserved.</p>
      </div>
    </>
  ) 
}
