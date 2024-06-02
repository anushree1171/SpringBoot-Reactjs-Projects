import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Tasks.css';
import Card1 from '../reusable_components/Card1';
import { allTasks, getAllTaskCategories, getTasksByCategory } from '../service/TaskService';

export default function Tasks({ makeTasksOfTheDay, makeRemainder, setTaskToEditFn, setTaskToMoveToTrashFn }) {

  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [tasksToDisplay, setTasksToDisplay] = useState([]);

  const navigator = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    getAllTaskCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    allTasks()
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (categoryName) {
      setCategorySelected(categoryName);
    }
  }, [categoryName]);

  useEffect(() => {
    if (categorySelected) {
      getTasksByCategory(categorySelected)
        .then(response => {
          setTasksToDisplay(response.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [categorySelected]);

  function handleSelectedCategory(category) {
    setCategorySelected(category);
  }

  function handleAllTasks() {
    setTasksToDisplay(tasks);
  }

  return (
    <>
      <div className="task-container">
        <div className="task-nav">
          <h4 onClick={handleAllTasks}>All</h4>
          {
            categories.map(category => (
              <h4 key={category} onClick={() => handleSelectedCategory(category)}>{category}</h4>
            ))
          }
          <button onClick={() => navigator('/addTask')}>
            + Add Task
          </button>
        </div>
        <div className="task-list">
          <div className="started">
            <h3>Started</h3>
            {
              tasksToDisplay
                .filter(task => task.status.toLowerCase() === "started")
                .map(task => (
                  <Card1
                    key={task.task_id}
                    id={task.task_id}
                    {...task}
                    makeRemainder={makeRemainder}
                    setTaskToEditFn={setTaskToEditFn}
                    setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
                  />
                ))
            }
          </div>
          <div className="in-progress">
            <h3>In progress</h3>
            {
              tasksToDisplay
                .filter(task => task.status.toLowerCase() === "inprogress" )
                .map(task => (
                  <Card1
                    key={task.task_id}
                    id={task.task_id}
                    {...task}
                    makeRemainder={makeRemainder}
                    setTaskToEditFn={setTaskToEditFn}
                    setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
                  />
                ))
            }
          </div>
          <div className="completed">
            <h3>Completed</h3>
            {
              tasksToDisplay
                .filter(task => task.status.toLowerCase() === "completed")
                .map(task => (
                  <Card1
                    key={task.task_id}
                    id={task.task_id}
                    {...task}
                    makeRemainder={makeRemainder}
                    setTaskToEditFn={setTaskToEditFn}
                    setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
