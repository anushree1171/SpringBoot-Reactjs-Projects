import React, { useState } from 'react'
import "./AddressForm.css"
import DelHeader from './DelHeader';
import Footer from './Footer';
import { useAddress } from '../delivery/AddressContext';
import { useNavigate } from 'react-router-dom';

export default function AddressForm() {
    const { dispatch } = useAddress();
    const [formData, setFormData] = useState({
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
    const [errors, setErrors] = useState({});

    const navigator = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        const requiredFields = ['houseNo', 'streetName', 'localityName', 'city', 'pincode', 'state', 'phoneNo', 'addressType'];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                formErrors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
            }
        });

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            dispatch({ type: 'ADD_ADDRESS', payload: formData });
            setFormData({
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
            navigator("/delivery-details")
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <>
            <DelHeader />
            <form className="address-form" onSubmit={handleSubmit}>
                <h2>Enter Your Address</h2>
                <br />
                <div className="form-group">
                    <label htmlFor="houseNo">House No:</label>
                    <input
                        type="number"
                        id="houseNo"
                        name="houseNo"
                        value={formData.houseNo}
                        onChange={handleChange}
                        required
                    />
                    {errors.houseNo && <span className="error">{errors.houseNo}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="block">Block:</label>
                    <input
                        type="text"
                        id="block"
                        name="block"
                        value={formData.block}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apartmentName">Apartment Name:</label>
                    <input
                        type="text"
                        id="apartmentName"
                        name="apartmentName"
                        value={formData.apartmentName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="streetName">Street Name:</label>
                    <input
                        type="text"
                        id="streetName"
                        name="streetName"
                        value={formData.streetName}
                        onChange={handleChange}
                        required
                    />
                    {errors.streetName && <span className="error">{errors.streetName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="localityName">Locality Name:</label>
                    <input
                        type="text"
                        id="localityName"
                        name="localityName"
                        value={formData.localityName}
                        onChange={handleChange}
                        required
                    />
                    {errors.localityName && <span className="error">{errors.localityName}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    {errors.city && <span className="error">{errors.city}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="pincode">Pincode:</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />
                    {errors.pincode && <span className="error">{errors.pincode}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    {errors.state && <span className="error">{errors.state}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNo">Phone No:</label>
                    <input
                        type="text"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                    />
                    {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="addressType">Address Type:</label>
                    <input
                        type="text"
                        id="addressType"
                        name="addressType"
                        value={formData.addressType}
                        onChange={handleChange}
                        required
                    />
                    {errors.addressType && <span className="error">{errors.addressType}</span>}
                </div>
                <button className="address-submit-btn" type="submit">Submit</button>
            </form>
            <Footer className="footer"/>
        </>
    );
}
