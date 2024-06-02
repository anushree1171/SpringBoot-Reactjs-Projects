import Categories from "./categories/Categories";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tasks from "./tasks/Tasks";
import Remainders from "./remainder/Remainders";
import Calendar from "./calendar/Calendar";
import Trash from "./trash/Trash";
import TaskForm from "./forms/TaskForm";
import RemainderForm from "./forms/RemainderForm";
import { useState } from "react";


function App() {

  const [makeRemainderFromTask, setMakeRemainderFromTask] = useState("");
  const makeRemainder = (taskName) =>{
    setMakeRemainderFromTask(taskName);
  }

  const [tasksOfTheDay, setTasksOfTheDay] = useState([]);
  const makeTasksOfTheDay = (tasks) =>{
      setTasksOfTheDay(tasks);
  }

  const [remaindersOfTheDay, setRemaindersOfTheDay] = useState([]);
  const makeRemaindersOfTheDay = (remainders) => {
    setRemaindersOfTheDay(remainders);
  }

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home 
          makeTasksOfTheDay={makeTasksOfTheDay}
          makeRemaindersOfTheDay={makeRemaindersOfTheDay}
          makeRemainder={makeRemainder} 
          />}></Route>
          <Route path="/categories" element={<Categories />}></Route>

          <Route path="/tasks" element={<Tasks 
          makeTasksOfTheDay={makeTasksOfTheDay}
          makeRemainder={makeRemainder} 
          />}></Route>
          
          <Route path="/tasks/:categoryName" element={<Tasks 
          makeTasksOfTheDay={makeTasksOfTheDay}
          makeRemainder={makeRemainder} 
          />}></Route>

          <Route path="/addTask" element={<TaskForm />}></Route>
          <Route path="/updateTask/:id" element={<TaskForm />}></Route>

          <Route path="/remainders" element={<Remainders />}></Route>
          <Route path="/addRemainder" element={<RemainderForm makeRemainderFromTask={makeRemainderFromTask}/>}></Route>
          <Route path="/updateRemainder/:id" element={<RemainderForm />}></Route>

          <Route path="/calendar" element={<Calendar 
          tasksOfTheDay={tasksOfTheDay}
          remaindersOfTheDay={remaindersOfTheDay}
          makeRemainder={makeRemainder}
          />}></Route>

          <Route path="/trash" element={<Trash
          makeTasksOfTheDay={makeTasksOfTheDay}
          makeRemainder={makeRemainder} 
          />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
