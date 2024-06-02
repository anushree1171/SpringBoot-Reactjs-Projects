import React, { useEffect, useState } from 'react'
import './Home.css'
import HomeSvg from '../../src/images/HomeSvg.svg';
import Card1 from '../reusable_components/Card1';
import CircularProgressBar from '../reusable_components/CircularProgressBar';
import HorizontalProgressBar from '../reusable_components/HorizontalProgressBar';
import { allTasks, getAllTaskCategories, tasksForTheDay, top4Tasks } from '../service/TaskService';
import { useNavigate } from 'react-router-dom';
import { getRemaindersForTheDay } from '../service/RemainderService';

export default function Home({makeTasksOfTheDay, makeRemaindersOfTheDay, makeRemainder, setTaskToEditFn, setTaskToMoveToTrashFn}) {

  const [homeTasks, setHomeTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const [todaysTasks, setTodaysTasks] = useState([]);
  const [todaysRemainders, setTodaysRemainders] = useState([]);

  const navigator = useNavigate();
  
  useEffect(()=>{

    top4Tasks()
    .then((response)=>{
      setHomeTasks(response.data);
    })
    .catch((err)=> {
      console.error(err);
    });

  }, []);

  useEffect(()=>{

    tasksForTheDay()
    .then((response)=>{
      setTodaysTasks(response.data);
    })
    .catch(err=>{
      console.error(err);
    });

  }, []); 

  useEffect(()=>{

    getRemaindersForTheDay()
    .then((response)=>{
      setTodaysRemainders(response.data);
      console.log("Todays remainders: ", response.data);
    })
    .catch(err=>{
      console.error(err);
    });

  }, []); 

  useEffect(()=>{

    getAllTaskCategories()
    .then(response => {
      setCategories(response.data);
    })
    .catch(err => {
      console.error(err);
    })

  }, []);

  useEffect(()=>{
    allTasks()
    .then(response =>{
      setTasks(response.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, []
  );

  const getOverallPercentage = () => {
    const tasksCompleted = tasks.filter(task => task.status.toLowerCase() === "completed").length;
    const totalTasks = tasks.length;
    const oap = tasksCompleted === 0 ? 0 : Math.round((tasksCompleted/totalTasks)*100);

    console.log("tasks completed: ", tasksCompleted);
    console.log("total tasks: ", totalTasks);
    console.log("oap",oap);

    return oap;
  }

  const getHomeTasks = () =>{
    let homeTasksArr = [];
    for(let i=0; i<homeTasks.length; i++){
      homeTasksArr.push(
        <Card1 
          key={homeTasks[i].task_id}
          id={homeTasks[i].task_id}
          name={homeTasks[i].name}
          category = {homeTasks[i].category}
          description={homeTasks[i].description}
          status = {homeTasks[i].status}
          makeRemainder = {makeRemainder}
          setTaskToEditFn= {setTaskToEditFn}
          setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
        />
      )
    }

    return homeTasksArr;
  }

  function tasksOfTheDay(){
    makeTasksOfTheDay(todaysTasks);
    makeRemaindersOfTheDay(todaysRemainders);
    navigator("/calendar");
  }

  function getLinearProgressBars(){
    const pbArray = [];
    const totalLength = tasks.length;
    for(let i=0; i<categories.length; i++){
      const length = tasks.filter(task => (task.category.toLowerCase() === categories[i].toLowerCase() && task.status.toLowerCase() === "completed")).length;
      const percentage = Math.floor((length/totalLength)*100);
      pbArray.push(
        <div key={i} className="pb">
          <h5>{categories[i]}</h5>
          <HorizontalProgressBar value={percentage}/>
        </div>
      )
    }
    return pbArray;
  }

  return (
    <>
      <div className="home-container">
        <div className="welcome">
          <div className="text-content">
            <h4>Welcome back Anushree!</h4>
            <h6>Check your scheduled tasks and schedules here.</h6>
            <button onClick={tasksOfTheDay}>Today's schedule</button>
          </div>
          <div className="image-content">
            <img src={HomeSvg} alt="animated calendar" />
          </div>
        </div>

        <div className="tasks">
          <h1>Tasks</h1>
          <div className="tasks-container">
            {
              getHomeTasks()
            }
          </div>
        </div>

        <div className="task-percentage">
          <h1>Complete Task Target</h1>
          <div className="percentage">
            <div className="overall">
              <h3>
                Overall percentage
              </h3>
              <CircularProgressBar className="animated-progress-bar" value={getOverallPercentage()}/>
            </div>
            <div className="category-wise">
              <h3>
                Category wise percentage
              </h3>
              <div className="hor-progressBar-container">
                {
                  getLinearProgressBars()
                }
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
