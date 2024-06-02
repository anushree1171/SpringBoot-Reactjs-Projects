import React from 'react';

export default function Input({handleRadioChange, value, title, name, color}) {
  return (
    <div>
      <label className="sidebar-label-container">
          <input onChange={handleRadioChange} value={value} type="radio" name={name}/>
          <span className="checkmark" style={{backgroundColor:`${color}`}}></span>
          {title}
      </label>
    </div>
  )
}
