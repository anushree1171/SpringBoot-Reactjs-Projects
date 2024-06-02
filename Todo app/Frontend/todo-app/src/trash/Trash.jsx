import React, { useState } from 'react'
import Card1 from '../reusable_components/Card1';
import './Trash.css'
import RemainderCard from '../reusable_components/RemainderCard';
import { getTrashRemainders } from '../service/RemainderService';
import { getTrashTasks } from '../service/TaskService';

export default function Trash({makeTasksOfTheDay, makeRemainder, setTaskToEditFn, setTaskToMoveToTrashFn, makeRemainderToEdit}) {

  const [trashTasks, setTrashTasks] = useState([]);
  const [trashRemainders, setTrashRemainders] = useState([]);

  useState(()=>{

    getTrashTasks()
    .then( response => {
      setTrashTasks(response.data);
      console.log(response.data);
    })
    .catch( err => {
      console.error(err);
    })

  }, []);


  useState(()=>{
    getTrashRemainders()
    .then( response => {
      setTrashRemainders(response.data);
      console.log(response.data);
    })
    .catch( err => {
      console.error(err);
    })
  }, []);


  return (
    <>
      <div className="trash-container">
        <h1>Trash</h1>
        <div className="trash-card-container">
            {
              trashTasks.map(task => {
                return (<Card1 
                  key={task.task_id}
                  name={task.name}
                  category = {task.category}
                  description={task.description}
                  status = {task.status}
                  makeRemainder = {makeRemainder}
                  setTaskToEditFn= {setTaskToEditFn}
                  setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
                />)
              })
            }
        </div>
        <div className="trash-remainderCard-container">
            {
              trashRemainders.map(remainder => {
                return (
                  <RemainderCard
                  key={remainder.id}
                  name={remainder.name}
                  date={remainder.date}
                  time={remainder.time}
                  status={remainder.status}
                  makeRemainderToEdit={makeRemainderToEdit}
                  className="remainder-card"
                  />
                )
              })
            }
        </div>
      </div>
    </>
  )
}
