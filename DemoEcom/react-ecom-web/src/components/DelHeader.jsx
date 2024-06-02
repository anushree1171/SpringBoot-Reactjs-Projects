import React from 'react'
import "./DelHeader.css"
import { GiSonicShoes } from 'react-icons/gi'

export default function DelHeader() {
  return (
    <>
      <div className="del-header">
          <h1 className='icon text-center'><GiSonicShoes /></h1>
          <br />
          <h4>
            Bag | <u><b>Delivery Details</b></u> | Pay
          </h4>
      </div>
    </>
  )
}
