import axios from "axios"

export const saveTask = async (task) => {
    axios.post("http://localhost:8080/saveTask", task);
}

export const getTaskById = async (id) => {
    return axios.get(`http://localhost:8080/getTaskById/${id}`)
}

export const allTasks = async () => {
    return axios.get("http://localhost:8080/getNonTrashTasks")
}

export const getTrashTasks = () => {
    return axios.get("http://localhost:8080/getTrashTasks");
}

export const tasksForTheDay = async() =>{
    return axios.get("http://localhost:8080/getTasksTodays");
}

export const top4Tasks = async () =>{
    return axios.get("http://localhost:8080/getTop4Tasks");
}

export const getTasksByCategory = async (category) =>{
    if(category.length===0){
        return allTasks();
    }
    else{
        return axios.get(`http://localhost:8080/getTasksByCategory/${category}`)
    }
}

export const getTaskByDate = async (date) => {
    if(date == null){
        return tasksForTheDay();
    }
    else{
        return axios.get(`http://localhost:8080/getTasksByDate/${date}`);
    }
}

export const getAllTaskCategories = async () =>{
    return axios.get("http://localhost:8080/getAllTaskCategories");
}

export const updateTask = async (id, task) => {
    return axios.put(`http://localhost:8080/updateTask/${id}`, task);
}

export const updateTaskStatus = async (id, status) =>{
    return axios.put(`http://localhost:8080/updateTaskStatus/${id}`, status, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const updateTaskTrash = async (id) =>{
    return axios.put(`http://localhost:8080/updateTaskTrash/${id}`, true, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const deleteTask = async (id) => {
    return axios.delete(`http://localhost:8080/deleteTask/${id}`);
}