import React from "react";
import { IoBag } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

export default function Card({product_id, img, title, stars, reviews, prevPrice, newPrice, company, color, category,available_quantity,cart_quantity, cartDispatch, wishlistDispatch, receiveSingleProduct }) {                        
  const product = {product_id, img, title, stars, reviews, prevPrice, newPrice, company, color, category,available_quantity,cart_quantity};

  const navigator = useNavigate();

  //cart
  const addToCart = (product) => {
    cartDispatch({type:'ADD_TO_CART', payload:product});
  };

  //wishlist
  const addToWishlist = (product) => {
    wishlistDispatch({type:'ADD_TO_WISHLIST', payload:product});
  };

  function handleStars(){
    let s = [];
    for(let i=0; i<stars; i++){
      s.push(<FaStar className=".ratings-star" key={i}/>);
    }
    return <div>{s}</div>
  }

  const handleCard = (product_id) => {
    console.log("from card click", product);

    receiveSingleProduct(product);
    navigator(`/product/${product_id}`);
  };

  return (
    <div>
      <section className="card">
      <img
        className="card-img"
        src={img}
        alt={title}
      />
      <div className="card-details">
        <h3 className="card-title" onClick = {()=> handleCard(product_id)}>{title}</h3>
        <section className="card-reviews">
          <div className="stars">
            {
              handleStars()
            }
          </div>
          <span className="total-reviews">Total reviews: {reviews.length}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <s>${prevPrice}</s>
            <p>${newPrice}</p>
          </div>

          <div className="bag">
            <FaHeart className="bag-icon" onClick={()=>{addToWishlist(product)}}/>
            <IoBag className="bag-icon" onClick={()=>{addToCart(product)}}/>
          </div>
        </section>
      </div>
    </section>
    </div>
  )
}



