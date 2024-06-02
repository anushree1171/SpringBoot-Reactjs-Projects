import React, { useEffect, useState } from 'react';
import './Calendar.css';
import { useNavigate } from 'react-router-dom';
import Card1 from '../reusable_components/Card1';
import RemainderCard from '../reusable_components/RemainderCard';
import { getTaskByDate } from '../service/TaskService';
import { getRemainderByDate } from '../service/RemainderService';

export default function Calendar({ tasksOfTheDay, remaindersOfTheDay, makeRemainder, setTaskToEditFn, setTaskToMoveToTrashFn }) {

  const navigator = useNavigate();

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasksByDate, setTasksByDate] = useState([]);
  const [remainderByDate, setRemainderByDate] = useState([]);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function getMonth() {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const calendar = [];

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayIndex) {
          week.push(<td key={`empty-${j}`}></td>);
        } else if (day <= daysInMonth) {
          week.push(<td key={day} onClick={(e) => handleDateClick(e.target.textContent)}>{day}</td>);
          day++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
      if (day > daysInMonth) break;
    }

    return calendar;
  }

  const handleDateClick = (day) => {
    day = Number(day)+1;
    const newDate = new Date(currentYear, currentMonth, parseInt(day));
    const formattedDate = newDate.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
  }

  useEffect(() => {
    if (selectedDate) {
      getTaskByDate(selectedDate)
        .then(response => {
          setTasksByDate(response.data);
          console.log(`tasks on ${selectedDate} are ${response.data}`);
        })
        .catch(err => {
          console.error(err);
      });
      
    }
  }, [selectedDate]);

  useEffect(()=>{
    if(selectedDate){
      getRemainderByDate(selectedDate)
        .then(response => {
          setRemainderByDate(response.data);
          console.log(`remainders on ${selectedDate} are ${response.data}`); 
        })
        .catch(err => {
          console.error(err);
      });
    }
  }, [selectedDate]);


  const prevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
  };

  function displayMonth() {
    return (
      <div className="month">
        <div className="month-header">
          <button className='month-button prev-button' onClick={prevMonth}>&#10094;</button>
          <h4>{monthNames[currentMonth]}, {currentYear}</h4>
          <button className='month-button next-button' onClick={nextMonth}>&#10095;</button>
        </div>
        <div className="month-table">
          <table>
            <thead>
              <tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              {getMonth()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h3>Calendar</h3>
        <div className="display-month">
          {displayMonth()}
        </div>
      </div>
      <div className="tasks-and-remainders">
        <div className="tasksForTheDay">
          <h3>Tasks</h3>
          {tasksOfTheDay.length> 0 && <h5>Today: </h5>}
          {tasksOfTheDay.length> 0 && tasksOfTheDay.map(task =>
            <Card1
              key={task.task_id}
              {...task}
              makeRemainder={makeRemainder}
              setTaskToEditFn={setTaskToEditFn}
              setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
              className="task-card"
            />
          )}
          {selectedDate!=null && <h5>On {selectedDate}:</h5>}
          {selectedDate!=null && tasksByDate.map(task =>
            <Card1
              key={task.task_id}
              {...task}
              makeRemainder={makeRemainder}
              setTaskToEditFn={setTaskToEditFn}
              setTaskToMoveToTrashFn={setTaskToMoveToTrashFn}
              className="task-card"
            />
          )}
          {(selectedDate!=null && tasksByDate.length) === 0 && <p>Nothing scheduled on {selectedDate}.</p>}
        </div>
        <div className="remaindersForTheDay">
          <h3>Reminders</h3>
          {remaindersOfTheDay.length>0 && <h5>Today: </h5>}
          {remaindersOfTheDay.length>0 && remaindersOfTheDay.map(remainder =>
            <RemainderCard
              key={remainder.id}
              {...remainder}
              className="remainder-card"
            />
          )}
          {selectedDate!=null && <h5>On {selectedDate}:</h5>}
          {selectedDate!=null && remainderByDate.map(remainder =>
            <RemainderCard
              key={remainder.id}
              {...remainder}
              className="remainder-card"
            />
          )}
          {(selectedDate!=null && remainderByDate.length) === 0 && <p>Nothing scheduled on {selectedDate}.</p>}
        </div>
      </div>
    </div>
  );
}
