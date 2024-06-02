import React, { useEffect, useState } from 'react'
import './RemainderForm.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getRemainderById, saveRemainderFromForm, updateRemainder } from '../service/RemainderService';

export default function RemainderForm({makeRemainderFromTask}) { 
  const [remainderName, setRemainderName] = useState(""); 
  const [remainderDate, setRemainderDate] = useState(new Date().toISOString().slice(0, 10)); 
  const [remainderTime, setRemainderTime] = useState(new Date().toTimeString().slice(0, 5));
  const [errors, setError] = useState({
    remainder : ""
  });
  let remainderFromTask = makeRemainderFromTask;

  const {id} = useParams();
  const navigator = useNavigate();

  useEffect(()=>{
    if(id){
      getRemainderById(id)
      .then(response => {
        const responseData = response.data;
        setRemainderName(responseData.name);
        setRemainderDate(responseData.date);
        setRemainderTime(responseData.time);
      })
      .catch (err => {
        console.error(err);
      })
    }
    else if(remainderFromTask){
      console.log("making remainder from task: ",remainderFromTask)
      setRemainderName(remainderFromTask);
      remainderFromTask = "";
    }
  }, [id]);

  const validateForm = () =>{
    let valid = true;

    let errorsCopy = {...errors};

    if(remainderName.length === 0){
      valid = false;
      errorsCopy.remainder = "Remainder name is required";
    }
    else{
      errorsCopy.remainder = "";
    }

    setError(errorsCopy);

    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formattedTime = remainderTime+":00";
    const remainder = {"id": id, "name": remainderName, "date":remainderDate, "time":formattedTime};
    console.log("from save remainder fn: ", remainder);

    if (validateForm()) {
      if (id) {
        updateRemainder(id, remainder)
          .then(response => {
            console.log("Updation response", response);
            navigator("/remainders"); 
          })
          .catch(err => console.error(err));
      } else {
        saveRemainderFromForm(remainder)
          .then(response => {
            console.log("Saving response", response);
            navigator("/remainders"); 
          })
          .catch(err => console.error(err));
      }
    }
  }

  function getRemainderHeader(){
    if(id){
      return <h1 className='remainder-header'>Update Reminder</h1>
    }
    else{
      return <h1 className='remainder-header'>Add Reminder</h1>
    }
  }


  return (
    <>
      <div className="remainder-form">
        {
          getRemainderHeader()
        }
        <form >
          <div className="remainder-form-ip">
            <label htmlFor="remainder-name">Name</label> <br />
            <input type="text" name="remainder-name" id="remainder-name" value={remainderName} onChange={e=>setRemainderName(e.target.value)}/><br />
            {errors.remainder && <span style={{color : "red"}}>{errors.remainder}</span>}
          </div>

          <div className="remainder-form-ip">
            <label htmlFor="remainder-date">Date</label> <br />
            <input type="date" name="remainder-date" id="remainder-date" value={remainderDate} onChange={e=>setRemainderDate(e.target.value)}/>
          </div>

          <div className="remainder-form-ip">
            <label htmlFor="remainder-time">Time</label> <br />
            <input type="time" name="remainder-time" id="remainder-time" value={remainderTime} onChange={e=>setRemainderTime(e.target.value)}/>
          </div>

          <button type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}
