# Description

FRONTEND: a react application created using vite.js

This task management app is called "Task Trek".
It allows a user to add tasks and remainders, update their status, edit them, move them to a trash (similar to an archive) or completely delete them. 

The frontend section of the application is composed of the following components:
1. Navbar :  This consists of 
    - a search bar (whose functionality is still in the making)
    - a date card, which display the respective day's date 
    - a user icon, which can be used once the authentication and authorization is implemented (also, still in the making)
2. Sidebar : This consists of five sections 
    - home 
        consists of a poster div, 
        a tasks section with 4 recently added tasks,
        and a progress section to view overall progress and category wise progress of tasks
    - tasks : 
        displays all tasks that aren't trash or deleted
        consists of a navbar on top, of all the categories of tasks, 
        on clicking on one category the body displays all tasks belonging to the respective category 
        in terms of its status : started, in progress and completed
        a button to add a task is provided at the end of all categories in the tasks navbar
    - categories : 
        a list of all categories, upon clicking leads the user to the tasks section with the tasks filtered accordingly
    - reminders : 
        a display of all reminders the user has scheduled so far, that aren't trash or deleted
        a button to add remainder is provided 
    - calendar: This consists of two sections 
        a monthly calendar display 
        a tasks and reminders section : on clicking on a day in the calendar, the tasks and reminder for that day is displayed in this section
        NOTE: tasks are filtered by "taskAddedDate" and reminders are filtered by "date"
    - trash :
        displays all tasks and reminders which are marked as trash

3. Task form :  The user is directed to the task form on clicking the "+add task" button in the tasks navbar

4. Reminder form : The user is directed to the reminder form on clicking the "+add reminder" button in the tasks navbar

5. Task card : Each Task card displays
    - task name
    - task description
    - task status 
    - icons, whom on clicking, the task status can be updated 
    - another set of icons for editing the task, making a reminder out of the task, 
    moving the task to trash and deleting the task permanently

6. Reminder card : Each reminder card displays 
    - reminder name 
    - scheduled date 
    - schedule time 
    - two icons to update the status of the reminder
    - three icons to : edit the reminder, move the reminder to trash and delete the reminder permanently

clicking on the edit buttons in the task card or the reminder card will direct the user to the task form or reminder for respectively, where the present data of the task or remainder is displayed in the input elements.
The user can change the values and on clicking submit, the data for the task or reminder is updated relatively.

BACKEND : spring boot based rest service, database used : MySQL, database tool used : MySQL workbench 

A rest controller to serve data to the front end. 
Consists of the following layers:

1. Controller

2. Entity : Consists of two entity classes
    - Task
    - Reminder

3. Dao : extends JpaRespository
    many custom queries are written to meet all data needs of the front end
    such as fetching trash and non trash data, by date, by categories etc.
    - TaskDao
    - Reminder Dao

4. Service : 
    - TaskService 
    - TaskServiceImpl
    - ReminderService
    - ReminderServiceImpl

5. Exceptions
    - Reminder Id not found
    - Task Id not found

6. Error Respose : 
    - to send relevant error messages to the fontend



# Instructions for execution:

1. the backend runs on port 8080
2. the frontend runs on port 5173

the spring boot version used is 3.2.5
backend can be executed as usual

since the react app is created using vite, installation of vite would be required if not already present 
navigate to .\todo-app\ and run the command "npm run dev" on the terminal
and then navigate to "http://localhost:5173/" to launch the app

please make sure the vite server and spring boot server are running parallely


the data can be saved in the mysql database by
    - saving the tasks at the url "http://localhost:8080/saveAllTasks" using a post request 
    - saving the reminders at the url "http://localhost:8080/saveAllRemainders" using a post request 
on POSTMAN

NOTE: data for postman is provided in json format

# OR

can be saved in a MySQL database using the provided .sql files

NOTE: data for postman is provided in the form of sql queries
