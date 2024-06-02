import React from 'react'

function Buttons({handleButtonsChange, value, title}) {
  return (
    <>
      <button onClick={handleButtonsChange} value={value} className='btns'>{title}</button>
    </>
  )
};

export default Buttons;
