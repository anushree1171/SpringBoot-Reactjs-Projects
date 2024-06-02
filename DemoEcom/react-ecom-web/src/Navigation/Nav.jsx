import React from 'react'
import "./Nav.css"

import { GiSonicShoes } from "react-icons/gi";
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function Nav({cart_size, query, handleInputChange}) { 

  // const {cartSize} = cartState;
  // useEffect(()=>{
  //   console.log(cartSize)
  // }, [cartSize]);

  const navigator = useNavigate();

  function handleBadge(){
    if(cart_size>0){
      return <span className="badge">{cart_size}</span>
    }else{
      return null;
    }
  }

  function handleHeart(){
    navigator("/wishlist");
  }

  function handleBag(){
    navigator("/cart")
  }

  return (
    <nav >
      <div className="logo-container">
          <h3 className='sidebar-title'>Sonic Shoes <GiSonicShoes /></h3>
      </div>
      <div className='navContainer'>
        <input
        type='text'
        className='search-input'
        placeholder='Enter your search here'
        value={query}
        onChange={handleInputChange}
        />
      </div>
      <div className='profileContainer'>
        <a href='#'>
          <FiHeart className='nav-icons' onClick={handleHeart}/>
        </a>
        <a className="cart-icon" href='#'>
          <AiOutlineShoppingCart className='nav-icons' onClick={handleBag}/>
          {
            handleBadge()
          }
        </a>
        <a href='#'>
          <AiOutlineUserAdd className='nav-icons'/>
        </a>
      </div>

    </nav>
  )
}
