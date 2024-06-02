import React from 'react'
import DelHeader from "../components/DelHeader"
import Footer from "../components/Footer"
import AddressCard from '../components/AddressCard';
import "./OrderSummary.css"
import { GiSonicShoes } from 'react-icons/gi';


export default function OrderSummary({ cartItems, cartState, selectedAddress }) {

    const { cartTotal } = cartState;

    return (
        <>
            <div className="order-summary-container">
                <div className="del-header">
                    <h1 className='icon text-center'><GiSonicShoes /></h1>
                    <br />
                    <h4>
                        Bag | Delivery Details | <u><b>Pay</b></u>
                    </h4>
                </div>
                <div className="summary-container">
                    <div className="cart-items">
                        <h3>Cart Items: </h3>
                        {
                            cartItems.map((product) => {
                                const { img, title, company, color, category, newPrice, cart_quantity } = product;
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
                                            <p>Quantity: {cart_quantity}</p>
                                            <p>Price:<b>${newPrice * cart_quantity}</b></p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="orderTotal">
                            <h4>
                                Order Total : &nbsp;
                            </h4>
                            {
                                cartTotal === 0 ? 0 : cartTotal - (cartTotal - (0.3 * cartTotal)) + 10 + 5
                            }
                        </div>
                    </div>
                    <div className="selected-address">
                        <h3>Selected address: </h3>
                        {(!Object.keys(selectedAddress).length === 0) &&
                            <AddressCard
                                key={1}
                                houseNo={selectedAddress.houseNo}
                                block={selectedAddress.block}
                                apartmentName={selectedAddress.apartmentName}
                                streetName={selectedAddress.streetName}
                                localityName={selectedAddress.streetName}
                                city={selectedAddress.city}
                                pincode={selectedAddress.pincode}
                                state={selectedAddress.state}
                                phoneNo={selectedAddress.phoneNo}
                                addressType={selectedAddress.addressType}
                            />
                        }
                    </div>
                </div>
                <button className='paynow'>Pay now</button>
                <Footer className="os-footer" />
            </div>
        </>
    )
}
