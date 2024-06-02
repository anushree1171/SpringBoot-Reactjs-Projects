import React, { useState, useEffect } from 'react'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoTrashOutline } from "react-icons/io5";
import { RiProgress3Line } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { deleteRemainder, moveToTrash, updateRemainderStatus } from '../service/RemainderService';
import { IoTrashBinOutline } from "react-icons/io5"
import Swal from 'sweetalert2';

export default function RemainderCard({id, name, date, time, status}) {

  const [todayDate, setTodayDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    setTodayDate(formattedToday);

    const formattedTime = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;
    setCurrentTime(formattedTime);
  }, []);

  const remainder = {id, name, date, time, status}

  const navigator = useNavigate();

  function handleEdit(){
    navigator(`/updateRemainder/${id}`);
  }

  function handleMoveToTrash(){
    moveToTrash(id);
    navigator("/remainders");
  }

  function handleChange1(){
    updateRemainderStatus(id, "notDone");
  }

  function handleChange2(){
    updateRemainderStatus(id, "done");
  }

  function deleteRemainderById(){
    deleteRemainder(id);
  }

  function showSweetAlert() {
    Swal.fire({
      title: `${name}`,
      text: `Scheduled at: ${date} ${time}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Done',
      cancelButtonText: 'Postpone'
    }).then((result) => {
      if (result.isConfirmed) {
        handleChange2(); // Mark as done
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navigator(`/updateRemainder/${id}`) // Postpone
      }
    });
  }

  useEffect(() => {
    if (date === todayDate && time === currentTime) {
      showSweetAlert();
    }
  }, [todayDate, currentTime]);

  return (
    <>
      <div className="remainder-card">
        <h4>{name}</h4>
        <p>Scheduled at: {date} {time}</p>
        <div className="remainder-status">
          <p>Status: </p>
          <div className="remainder-status-icons">
            
            <div className="remainder-satus-ip">
              <input type="radio" name="remainder-status" id={`remainder-status-notDone-${id}`} 
              checked = {status=="notDone"}
              onChange={handleChange1}/>
              <label htmlFor={`remainder-status-notDone-${id}`}><RiProgress3Line className='remainder-card-icon'/></label>
            </div>

            <div className="remainder-satus-ip">
              <input type="radio" name="remainder-status" id={`remainder-status-done-${id}`} 
              checked={status === "done"}
              onChange={handleChange2}/>
              <label htmlFor={`remainder-status-done-${id}`}><FaRegCheckCircle className='remainder-card-icon'/></label>
            </div>

          </div>
        </div>
        <div className="remainder-icons">
            <HiOutlinePencilSquare onClick={handleEdit}
            className='remainder-card-icon'/>
            <IoTrashOutline onClick={handleMoveToTrash}
            className='remainder-card-icon'/>
            <IoTrashBinOutline onClick={deleteRemainderById}
            className='remainder-card-icon' />
        </div>
      </div>
    </>
  )
}
