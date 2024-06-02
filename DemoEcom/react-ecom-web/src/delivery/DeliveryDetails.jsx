import React, { useState } from 'react'
import './DeliveryDetails.css'
import Footer from "../components/Footer"
import DelHeader from '../components/DelHeader';
import AddressCard from '../components/AddressCard';
import { useAddress } from './AddressContext';
import { useNavigate } from 'react-router-dom';

export default function DeliveryDetails({ makeSelectedAddress }) {
  const [selectedAddress, setSelectedAddress] = useState({
    houseNo: '',
    block: '',
    apartmentName: '',
    streetName: '',
    localityName: '',
    city: '',
    pincode: '',
    state: '',
    phoneNo: '',
    addressType: '',
  });

  const { state } = useAddress();
  const { addresses } = state;
  const navigator = useNavigate();

  function addAddress() {
    navigator("/add-address");
  };

  function handleSelectedAddress(address) {
    setSelectedAddress(address);
    makeSelectedAddress(address);

    const addressCard = document.getElementsByClassName("addressCard")[0];
    addressCard.style.border = "0.5px solid #e6b800";
  };

  function handlePaymentNav() {
    if (Object.keys(selectedAddress).length === 0) {
      alert("Please select an address.");
    } else {
      navigator("/order-summary");
    }
  }

  return (
    <div className='delivery-container'>
      <DelHeader />
      <div className="addressFormContainer">
        {addresses.length !== 0 && addresses.map((address) => (
          <AddressCard
            className="addressCard"
            key={Math.random()} 
            houseNo={address.houseNo}
            block={address.block}
            apartmentName={address.apartmentName}
            streetName={address.streetName}
            localityName={address.localityName}
            city={address.city}
            pincode={address.pincode}
            state={address.state}
            phoneNo={address.phoneNo}
            addressType={address.addressType}
            onClick={() => handleSelectedAddress(address)}
          />
        ))}
        <p className="addAddress" onClick={addAddress}>Add an address</p>
      </div>
      <button className='payment-btn' onClick={handlePaymentNav}>Payment</button>
      <Footer className="del-footer" />
    </div>
  );
}
