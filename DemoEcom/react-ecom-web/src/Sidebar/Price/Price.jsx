import React from 'react'
import './Price.css'
import Input from '../../components/Input'

export default function Price({handleRadioChange}) {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
          <input type="radio" onChange={handleRadioChange} value="" name="test"/>
          <span className="checkmark"></span>All
      </label>


        <Input handleRadioChange={handleRadioChange}
        value={50}
        title="$0-$50"
        name="test2"/>

        <Input handleRadioChange={handleRadioChange}
        value={100}
        title="$50-$100"
        name="test2"/>

        <Input handleRadioChange={handleRadioChange}
        value={150}
        title="$100-$150"
        name="test2"/>

        <Input handleRadioChange={handleRadioChange}
        value={200}
        title="$150-$200"
        name="test2"/>

        
    </div>
  )
}
