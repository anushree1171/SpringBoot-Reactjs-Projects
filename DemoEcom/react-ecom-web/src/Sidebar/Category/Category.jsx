import React from 'react'
import './Category.css'
import Input from '../../components/Input'

export default function Category({handleRadioChange}) {
  return (
    <>
      <div className="category">
          <h2 className="sidebar-title category-title">Category</h2>
          <div>
            <label className="sidebar-label-container">
              <input type="radio" onChange={handleRadioChange} value="" name="test"/>
              <span className="checkmark"></span>All
            </label>

            <Input handleRadioChange={handleRadioChange}
            value="sneakers"
            title="Sneakers"
            name="test"/>

            <Input handleRadioChange={handleRadioChange}
            value="flats"
            title="Flats"
            name="test"/>

            <Input handleRadioChange={handleRadioChange}
            value="sandals"
            title="Sandals"
            name="test"/>

            <Input handleRadioChange={handleRadioChange}
            value="heels"
            title="Heels"
            name="test"/>


          </div>
      </div>
    </>
  )
};
