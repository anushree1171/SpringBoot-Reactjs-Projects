import React from 'react';
import './Recommended.css'
import Buttons from '../components/Buttons';

export default function Recommended({handleButtonsChange}) {
  return (
    <>
      <div className='recommended-flex'>
        <h2 className='recommended-title'><b>Recommended</b></h2>
        <div className="recommended-btns">
          <Buttons handleButtonsChange={handleButtonsChange} value="" title="All Products"/>
          <Buttons handleButtonsChange={handleButtonsChange} value="Nike" title="Nike"/>
          <Buttons handleButtonsChange={handleButtonsChange} value="Adidas" title="Adidas"/>
          <Buttons handleButtonsChange={handleButtonsChange} value="Puma" title="Puma"/>
          <Buttons handleButtonsChange={handleButtonsChange} value="Vans" title="Vans"/>
        </div>
      </div>
    </>
  )
}
