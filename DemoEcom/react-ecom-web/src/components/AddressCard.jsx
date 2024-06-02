import React from 'react'
import "./AddressCard.css"
import { IoTrashOutline } from "react-icons/io5";
import { useAddress } from '../delivery/AddressContext';

export default function AddressCard({ houseNo, block, apartmentName, streetName, localityName, city, pincode,
    state, phoneNo, addressType }) {

    const address = {
        houseNo, block, apartmentName, streetName, localityName, city, pincode,
        state, phoneNo, addressType
    };

    const { dispatch } = useAddress();

    const handleDelete = () => {
        dispatch({ type: 'REMOVE_ADDRESS', payload: address });
    };

    return (
        <>
            <div className="address-card-container">
                <h4><strong><u>{addressType}</u></strong></h4>
                <p><strong>House No:</strong> {houseNo}</p>
                <p><strong>Block:</strong> {block}</p>
                <p><strong>Apartment Name:</strong> {apartmentName}</p>
                <p><strong>Street Name:</strong> {streetName}</p>
                <p><strong>Locality Name:</strong> {localityName}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Pincode:</strong> {pincode}</p>
                <p><strong>State:</strong> {state}</p>
                <p><strong>Phone No:</strong> {phoneNo}</p>
                <IoTrashOutline className='delete-icon' onClick={handleDelete} />
            </div>
        </>
    )
}


