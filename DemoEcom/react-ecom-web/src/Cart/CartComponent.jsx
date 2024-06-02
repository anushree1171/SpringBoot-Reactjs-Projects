import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { GiSonicShoes } from "react-icons/gi";
import "./CartComponent.css"
import Footer from '../components/Footer';
import { IoTrashOutline } from "react-icons/io5";

export default function CartComponent({cart, cartState, cartDispatch}) {

    const {cartTotal} = cartState;
    useEffect(()=>{
        console.log(cartTotal)
    }, [cartTotal]);


    //CART ITEMS
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const navigator = useNavigate();


    function payment(){
        if(cartItems.length === 0){
            alert("Cart is empty!");
        }
        else{
            navigator("/delivery-details");
        }
        
    }

    const addToCart = (product) => {
        cartDispatch({type:'ADD_TO_CART', payload:product});
    };

    const removeFromCart = (product) => {
        cartDispatch({type:'REMOVE_FROM_CART', payload:product});
    };

    const removeAllFromCart = (product) => {
        cartDispatch({type:'REMOVE_ALL_FROM_CART', payload:product});
    };
    
    return (
        <>
            <div className="cart-container">
                <div className="header">
                    <h1 className='icon text-center'><GiSonicShoes /></h1>
                    <br/>
                    <h4>
                        <u><b>Bag</b></u> | Delivery Details | Pay
                    </h4>
                </div>
                <div className="heading">
                    <b>My bag ({cart.length} items)</b>
                </div>
                <div className="cart-body">
                    <div className="cart-card-container">
                        {
                            cartItems.map((product) => {
                                const {img, title, company, color, category, newPrice, available_quantity, cart_quantity} = product;
                                return (
                                    <div className="cart-card" key={product.product_id}>
                                        <div className="img-container">
                                            <img src={img} alt={title} />
                                        </div>
                                        <div className="dets-container">
                                            <h4>{title}</h4>
                                            <p>Category: {category}</p>
                                            <p>Brand: {company}</p>
                                            <p>Color: {color}</p>
                                            <div className="quantity">
                                                <button onClick={()=>removeFromCart(product)}>-</button>
                                                <p>{cart_quantity}</p>
                                                <button onClick={()=>addToCart(product)}>+</button>
                                            </div>
                                            <p>Price:<b>${newPrice * cart_quantity}</b></p> 
                                        </div>
                                        <IoTrashOutline className="trash-icon" onClick={()=>removeAllFromCart(product)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="cart-summary">
                        <h5>Order Details</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Bag Total:</td>
                                    <td>${cartTotal}</td>
                                </tr>
                                <tr>
                                    <td>Bag Discount:</td>
                                    <td>-$
                                        {
                                            cartTotal - (0.3*cartTotal)
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td>Delivery Fee:</td>
                                    <td>$10</td>
                                </tr>
                                <tr>
                                    <td>Platform fee:</td>
                                    <td>$5</td>
                                </tr>
                                <tr>
                                    <td>Order Total:</td>
                                    <td>$
                                        {
                                            cartTotal===0 ? 0 : cartTotal - (cartTotal - (0.3*cartTotal)) + 10 + 5
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='pay-button' onClick={payment}>Procced to Pay</button>
                    </div>
                </div>
            </div>
            <Footer className="cart-footer"/>
        </>
    )
}
