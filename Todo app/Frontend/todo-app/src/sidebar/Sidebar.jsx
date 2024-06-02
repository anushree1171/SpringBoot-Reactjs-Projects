import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'
import { AiOutlineHome } from "react-icons/ai";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineTask } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { PiTrashSimple } from "react-icons/pi";
import { GiHiking } from "react-icons/gi";

export default function Sidebar() {

    const navigator = useNavigate();

  return (
    <>
        <div className="sidebar">
            <input className='hamburger-ip' type="checkbox" name="hamburger-ip" id="hamburger-ip" />
            <label className="hamburger-label" htmlFor="hamburger-ip">&#9776;</label>
            
            <div className="sidebar-container">
                <div className="sidebar-title">
                    <h4><GiHiking /> &nbsp; TaskTrek</h4>
                </div>
                <div className="sidebar-section" onClick={()=>{navigator("/")}}>
                    <AiOutlineHome className="sidebar-icon"/> &nbsp; &nbsp;
                    <p>Home</p>
                </div>
                <div className="sidebar-section" onClick={()=>{navigator("/categories")}}>
                    <TbCategory2 className="sidebar-icon"/> &nbsp; &nbsp;
                    <p>Categories</p>
                </div>
                <div className="sidebar-section" onClick={()=>{navigator("/tasks")}}>
                    <MdOutlineTask className="sidebar-icon"/> &nbsp; &nbsp;
                    <p>Tasks</p>
                </div>
                <div className="sidebar-section" onClick={()=>{navigator("/remainders")}}>
                    <BsBell className="sidebar-icon" /> &nbsp; &nbsp;
                    <p>Reminders</p>
                </div>
                <div className="sidebar-section" onClick={()=>{navigator("/calendar")}}>
                    <LuCalendar className="sidebar-icon"/> &nbsp; &nbsp;
                    <p>Calendar</p>
                </div>
                <div className="sidebar-section" onClick={()=>{navigator("/trash")}}>
                    <PiTrashSimple className="sidebar-icon"/> &nbsp; &nbsp;
                    <p>Trash</p>
                </div>
            </div>
        </div>
    </>
  ) 
}
