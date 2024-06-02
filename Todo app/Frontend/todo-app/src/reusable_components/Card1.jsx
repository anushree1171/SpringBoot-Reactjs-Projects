import React from 'react'
import { PiBellRingingLight } from "react-icons/pi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoTrashOutline } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";
import { GiProgression } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { deleteTask, updateTaskStatus, updateTaskTrash } from '../service/TaskService';
import { IoTrashBinOutline } from "react-icons/io5"

//for column-row type arrangement

export default function Card1({id, name, description, category, status, makeRemainder, setTaskToEditFn}) {

  const cardTask = {id, name, description, category, status, makeRemainder, setTaskToEditFn};

  console.log("input id of task: ", id);

  const navigator = useNavigate();

  const lowerCaseStatus = status.toLowerCase();

  function setRemainder(){
    makeRemainder(name);
    navigator("/addRemainder");
  }

  function editTask(){
    console.log("task to be edited : ", id);
    navigator(`/updateTask/${id}`);
  }

  function moveTaskToTrask(){
    updateTaskTrash(id);
  }

  function handleOnChange1(){
    console.log(`Changing status of id: ${id} to started`);
    updateTaskStatus(id, "Started");
  }

  function handleOnChange2(){
    console.log(`Changing status of id: ${id} to in progress`);
    updateTaskStatus(id, "In progress");
  }

  function handleOnChange3(){
    console.log(`Changing status of id: ${id} to completed`);
    updateTaskStatus(id, "Completed");
  }

  function deleteTaskById(){
    deleteTask(id)
    .then(response => console.log(response))
    .catch(err =>  console.error(err));
  }
  
  return (
    <>
      <div className="card1">
        <h3>{name}</h3>
        <h6>{description}</h6>
        <div className="task-status">
          <p>Status: </p>
          <div className="task-status-options">
            <div className="task-status-ip">
              <input type="radio" name="task-status" id={`task-status-started-${id}`} 
              checked={lowerCaseStatus === "started"}
              onChange={handleOnChange1}
              />
              <label htmlFor={`task-status-started-${id}`}><VscDebugStart className='card1-icon' values='started'/></label>
            </div>

            <div className="task-status-ip">
              <input type="radio" name="task-status" id={`task-status-progress-${id}`} 
              checked={lowerCaseStatus === "in progress"}
              onChange={handleOnChange2}
              />
              <label htmlFor={`task-status-progress-${id}`}><GiProgression className='card1-icon' values='inprogress'/></label>
            </div>

            <div className="task-status-ip">
              <input type="radio" name="task-status" id={`task-status-complete-${id}`} 
              checked={lowerCaseStatus === "completed"}
              onChange={handleOnChange3}
              />
              <label htmlFor={`task-status-complete-${id}`}><AiOutlineFileDone className='card1-icon' values='completed'/></label>
            </div>
          </div>
        </div>
        <div className="card1-icons">
            <PiBellRingingLight className='card1-icon' onClick={setRemainder}/>
            <HiOutlinePencilSquare className='card1-icon' onClick={editTask}/>
            <IoTrashOutline className='card1-icon' onClick={moveTaskToTrask}/>
            <IoTrashBinOutline className='card1-icon' onClick={deleteTaskById}/>
        </div>
      </div>
    </>
  )
}
