import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/getAll";

export const listEmployees = async () =>{
    return axios.get(REST_API_BASE_URL);
}

const ADD_EMPLOYEE_URL = "http://localhost:8080/save";

export const addEmployee = async (employee) => axios.post(ADD_EMPLOYEE_URL, employee);

export const getEmployeeById = async (id) => {
    return axios.get(`http://localhost:8080/get/${id}`);
}

export const updateEmployee = async(id, employee) => {
    return axios.put(`http://localhost:8080/update/${id}`, employee);
}

export const deleteEmployee = async(id) =>{
    return axios.delete(`http://localhost:8080/delete/${id}`);
}