import axios from "axios";

export const saveRemainderFromForm = async (remainder) => {
    console.log("from service js updateRemainder:", remainder);
    return axios.post("http://localhost:8080/saveRemainder", remainder);
}

export const getRemainderById = async (id) => {
    console.log("from service, id: ", id);
    return axios.get(`http://localhost:8080/getRemainderById/${id}`);
}

export const getRemaindersForTheDay = async () => {
    return axios.get("http://localhost:8080/getRemainderByTodaysDate");
}

export const getRemainderByDate = async (date) => {
    if(date==null){
        return getRemaindersForTheDay();
    }
    else{
        return axios.get(`http://localhost:8080/getRemainderByDate/${date}`);
    }
    
}

export const getAllRemainders = async () =>{
    return axios.get("http://localhost:8080/getNonTrashRemainder");
}

export const getTrashRemainders = async () => {
    return axios.get("http://localhost:8080/getTrashRemainder");
}

export const updateRemainder = async (id, remainder) => {
    console.log("from service js updateRemainder:", id, remainder);
    return axios.put(`http://localhost:8080/updateRemainder/${id}`, remainder);
}

export const updateRemainderStatus = async (id, stat) =>{
    console.log(`updating status of remainder with id: ${id} to ${stat}`);
    return axios.put(`http://localhost:8080/updateRemainderStatus/${id}`, stat, {
        headers : {
            'Content-Type': 'application/json'
        }
    })
}

export const moveToTrash = async (id) => {
    console.log(`moving remainder with id: ${id} to trash`);
    return axios.put(`http://localhost:8080/updateRemainderTrash/${id}`, true, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const deleteRemainder = async (id) => {
    return axios.delete(`http://localhost:8080//deleteRemainder/${id}`);
}

