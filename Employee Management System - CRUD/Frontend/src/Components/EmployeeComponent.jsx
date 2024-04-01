import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployeeById, updateEmployee} from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

export default function EmployeeComponent() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({
        first_name : "",
        last_name : "",
        email : ""
    })

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            getEmployeeById(id)
            .then((response)=>{
                const employeeData = response.data;
                setFirstName(employeeData.first_name);
                setLastName(employeeData.last_name);
                setEmail(employeeData.email);
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }, [id]);

    function saveEmployee(e){
        e.preventDefault();

        const employee = {id, first_name, last_name, email};
        console.log(employee);

        if(validateForm()){
            console.log(id);
                if(id){
                    console.log("updating employee");
                    updateEmployee(id, employee)
                    .then((response)=>console.log(response.data))
                    .catch((error) => console.error(error));
                }else{
                    console.log("adding new employee");
                    addEmployee(employee)
                    .then((response)=>console.log(response.data))
                    .catch((error) => console.error(error));
                }
        }
        navigator("/employees");
    }

    

    function validateForm(){
        let valid  = true;

        const errorsCopy = {...errors};

        if(first_name.trim()){
            errorsCopy.first_name = "";
        }else{
            errorsCopy.first_name = "First name is requried";
            valid = false;
        }

        if(last_name.trim()){
            errorsCopy.last_name = "";
        }else{
            errorsCopy.last_name = "Last name is requried";
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = "";
        }else{
            errorsCopy.email = "Email ID is requried";
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    function updateId(){
        if(id) return <p className='text-center'>{`Updating details for id : ${id}`}</p>
    }

  return (
    <>
          <form className='border border-secondary w-50'>
            {
                pageTitle()
            }
            {
                updateId()
            }
              <div className="form-group m-2 p-2">
                  <label className="m-1 p-1" htmlFor="firstName">First Name</label>
                  <input type="text" 
                  className={`form-control ${errors.first_name? "is-invalid" : ""}`}
                  id="firstName" placeholder="Enter first name"
                  value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                  {errors.first_name && <div className='invalid-feedback'>{errors.first_name}</div>}
              </div>
              <div className="form-group m-2 p-2">
                  <label className="m-1 p-1" htmlFor="lastName">Last Name</label>
                  <input type="text" 
                  className={`form-control ${errors.last_name? "is-invalid" : ""}`}
                  id="lastName" placeholder="Enter last name"
                  value={last_name} onChange={(e) => setLastName(e.target.value)} />
                  {errors.last_name && <div className='invalid-feedback'>{errors.last_name}</div>}
              </div>
              <div className="form-group m-2 p-2">
                  <label className="m-1 p-1" htmlFor="emailId">Email Address</label>
                  <input type="email" 
                  className={`form-control ${errors.email? "is-invalid" : ""}`}
                  id="emailId" placeholder="Enter email id"
                  value={email} onChange={(e) => setEmail(e.target.value)}  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <button type="submit" className="btn btn-outline-dark m-3" onClick={saveEmployee}>Submit</button>
          </form>
    </>
  )
}
