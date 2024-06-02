import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './TaskForm.css'
import { getTaskById, saveTask, updateTask } from '../service/TaskService';

export default function TaskForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("All");
    const [status, setStatus] = useState("started");

    const navigator = useNavigate();

  const [errors, setErrors] = useState({
    name : "",
    description : ""
  })

  const {id} = useParams();

  useEffect(()=>{
    if(id){
      console.log("task id from task form: ", id);
      getTaskById(id)
      .then(response => {
        const responseData = response.data;
        console.log(response.data);
        setName(responseData.name);
        setDescription(responseData.description);
        setCategory(responseData.category);
        setStatus(responseData.status);
      })
      .catch(err => {
        console.error(err);
      })
    }
  }, [id])

  const validateForm = () => {
    let valid = true;

    let errorsCopy = {...errors};

    if (name.trim().length === 0) {
      valid = false;
      errorsCopy.name = "Name is required";
    } else if (name.length > 30) {
      valid = false;
      errorsCopy.name = "Cannot be more than 30 characters";
    } else {
      errorsCopy.name = "";
    }
  
    if (description.trim().length === 0) {
      valid = false;
      errorsCopy.description = "Description is required";
    } else if (description.length > 100) {
      valid = false;
      errorsCopy.description = "Cannot be more than 100 characters";
    } else {
      errorsCopy.description = "";
    }

    setErrors(errorsCopy);

    return valid;
  }

  function saveTodo(e){
    e.preventDefault();
    const task = {id, name, description, category, status};
    console.log(task);

    if(validateForm()){
      console.log(id);
      if(id){
        updateTask(id,task)
        .then(response => {
          console.log("Updation response", response);
          navigator("/tasks");
        })
        .catch(err => console.error(err));
      }
      else{
        saveTask(task)
        .then(response => {
          console.log("Saving response", response);
          navigator("/tasks");
        })
        .catch(err => console.error(err));
      }
    }
  }

  function getHeader(){
    if(id){
      return <h1 className='task-form-header'>Update Task</h1>
    }
    else{
      return <h1 className='task-form-header'>Add Task</h1>
    }
  }


  return (
    <>
      <div className="task-form">
        {
          getHeader()
        }
        <form >
          <div className="task-form-ip">
            <label className='task-form-label' htmlFor="task-name">Name</label> <br/>
            <input type="text" name="task-name" id="task-name" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            {errors.name && <span style={{color : "red"}}>{errors.name}</span>}
          </div>

          <div className="task-form-ip">
            <label className='task-form-label' htmlFor="task-description">Description</label><br/>
            <input type="text" name="task-description" id="task-description" value={description} onChange={(e)=>setDescription(e.target.value)}/><br />
            {errors.description && <span style={{color: "red"}}>{errors.description}</span>}
          </div>

          <div className="task-form-ip">
            <label className='task-form-label' htmlFor="task-category">Category</label><br/>
            <input type="text" name="task-category" id="task-category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
          </div>

          <div className="task-form-ip">
            <label className='task-form-label' htmlFor="task-status">Status:</label><br/>
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="Started">Started</option>
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type='submit' onClick={saveTodo}>Submit</button>
        </form>
      </div>
    </>
  )
}
