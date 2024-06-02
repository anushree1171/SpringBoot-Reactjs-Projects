import React from 'react'
import './Sidebar.css'
import Category from './Category/Category.jsx';
import Price from './Price/Price.jsx';
import Colors from './Colors/Colors.jsx';

export default function Sidebar({ handleRadioChange }) {

  return (
    <>
      <div className="sidebar">
        
          <Category handleRadioChange={handleRadioChange} />
          <Price handleRadioChange={handleRadioChange} />
          <Colors handleRadioChange={handleRadioChange} />
        
      </div>
    </>
  )
}
