import React from 'react'
import { IoSearch } from "react-icons/io5";
import { BsCalendarEvent } from "react-icons/bs";
import { PiUserCircleDuotone } from "react-icons/pi";
import "./Navbar.css"

export default function Navbar() {

    function getTodaysDate(){
        var today = new Date();
        var day = today.getDate();
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var monthIndex = today.getMonth();
        var month = monthNames[monthIndex];
        var year = today.getFullYear();
        var formattedDate = day + " " + month + " " + year;

        return <p>{formattedDate}</p>;
    }


  return (
    <>
      <div className="navbar-container">
        <div className="search">
            <IoSearch className='search-icon'/>
            <input type="text" className='search-ip' placeholder='Search..'/>
        </div>
        <div className="date-and-profile">
            <div className="date">
                <BsCalendarEvent className='calendar-icon'/>
                &nbsp; 
                {
                    getTodaysDate()
                }
            </div>
            <PiUserCircleDuotone className='user-icon'/>
        </div>
      </div>
    </>
  )
}
