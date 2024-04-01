import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';

export default function ListEmployeeComponent() {

    let [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        listEmployees()
        .then((response)=>{
          setEmployees(response.data);
        })
        .catch((error)=>{
          console.error(error)
        });
    }, [])


    function addNewEmployee(){
      navigator("/add-employee");
    }

    function updateEmployee(id){
      navigator(`/update-employee/${id}`);
    }

    function delete_employee(id){
      console.log(id);

      deleteEmployee(id)
      .then((response)=>{
        console.log(response.data);
      })
      .catch((error)=>{
        console.error(error);
      })

      navigator("/employees");
    }

  return (
    <div className='container-fluid'>
      <div className="header">
        <h2 className='text-center p-3 m-2'>List of Employees</h2>
        <button type='button' className='btn border border-secondary rounded' onClick={addNewEmployee}>Add employee</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className='text-center'>Id</th>
            <th scope="col" className='text-center'>First Name</th>
            <th scope="col" className='text-center'>Last Name</th>
            <th scope="col" className='text-center'>Email Id</th>
            <th scope="col" className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => {
                return (<tr key={employee.id}>
                    <td className='text-center'>{employee.id}</td >
                    <td className='text-center'>{employee.first_name}</td >
                    <td className='text-center'>{employee.last_name}</td>
                    <td className='text-center'>{employee.email}</td>
                    <td className="text-center">
                      <button className="btn btn-outline-secondary" onClick={()=>{
                        updateEmployee(employee.id);
                      }}>
                        Update
                      </button>

                      <button className="btn btn-outline-secondary" onClick={()=>{
                        delete_employee(employee.id);
                      }}>
                        Delete
                      </button>
                    </td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  );
}
