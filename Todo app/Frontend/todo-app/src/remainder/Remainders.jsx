import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Remainders.css'
import RemainderCard from '../reusable_components/RemainderCard'
import { getAllRemainders } from '../service/RemainderService';

export default function Remainders({makeRemainderToEdit}) {

  const [remainders, setRemainders] = useState([]);
  const navigator = useNavigate();

  useEffect(()=>{

    getAllRemainders()
    .then (response => {
      setRemainders(response.data);
      console.log(response.data);
    })
    .catch(err => {
      console.error(err);
    });

  }, []);

  return (
    <>
      <div className="remainders-container">
        <div className="remainder-header">
          <h1>Reminders</h1>
          <button onClick={()=>navigator("/addRemainder")}>+ Add reminder</button>
        </div>
        <div className="remainders-card-container">
            {
              remainders.map( remainder => {
                return (
                  <RemainderCard
                  key={remainder.id}
                  id={remainder.id}
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
