import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from'react-router-dom';
import './Style.css';


function Home() {
    const [EmployeeName, setEmployeeName] = useState('')
    const [DOB, setDOB] = useState('')
    const [Age, setAge] = useState('')
    const [Department, setDepartment] = useState('')
    const [Designation, setDesignation] = useState('')
    const [Salary, setSalary] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone_No, setPhone_No] = useState('')

    const navigate=useNavigate();
    const handleSubmit = (event) =>{
        console.log(EmployeeName, DOB, Age, Department,Designation,Salary,Address,Phone_No);
        event.preventDefault();
        axios.post('http://localhost:3000/',{EmployeeName, DOB, Age, Department,Designation,Salary,Address,Phone_No})
        .then(res =>{
            navigate('/');
        }).catch(err => console.log(err));
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));   
    })
    /*const handleDelete=(EmployeeName)=>{
        axios.delete('http://localhost:3000/'+EmployeeName)
        .then(res => navigate('/'))
        .catch(err => console.log(err)); 
    }*/
  return (
    <div >
        <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 container mt-5'>
                    <form onSubmit={handleSubmit}>
                        <h1 >EMPLOYEE REGISTRATION</h1>
                        <div className='inputs'>
                            <div className='name'>Employee Name</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Employeee Name:' onChange={e => setEmployeeName(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>DOB</div>
                            <div classname='inputs'>
                                <input type='date' placeholder='Enter DOB:' onChange={e => setDOB(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Age</div>
                            <div classname='inputs'>
                                <input type='number' placeholder='Enter Age:' onChange={e => setAge(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Department</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Department:' onChange={e => setDepartment(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Designation</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Designation:' onChange={e => setDesignation(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Salary</div>
                            <div classname='inputs'>
                                <input type='number' placeholder='Enter Salary:' onChange={e => setSalary(e.target.value)} />
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Address</div>
                            <div classname='inputs'>
                                <input type='text' placeholder='Enter Address :' onChange={e => setAddress(e.target.value)}/>
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='name'>Phone Number</div>
                            <div classname='inputs'>
                                <input type='number' placeholder='Enter Phone Number:' onChange={e => setPhone_No(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
        <div className='container  '>
            <div className='main'>
                <h1> EMPLOYEE DETAILS</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <div></div>
                            <th>DOB</th>
                            <div></div>
                            <th>Age</th>
                            <div></div>
                            <th>Department</th>
                            <div></div>
                            <th>Designation</th>
                            <div></div>
                            <th>Salary</th>
                            <div></div>
                            <th>Address</th>
                            <div></div>
                            <th>Phone Number</th>
                            <div></div>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (d ,i) => (
                            <tr>
                                <td>{d.EmployeeName}</td>
                                <div></div>
                                <td>{d.DOB}</td>
                                <div></div>
                                <td>{d.Age}</td>
                                <div></div>
                                <td>{d.Department}</td>
                                <div></div>
                                <td>{d.Designation}</td>
                                <div></div>
                                <td>{d.Salary}</td>
                                <div></div>
                                <td>{d.Address}</td>
                                <div></div>
                                <td>{d.Phone_No}</td>
                                <div></div>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div> 
    </div>
  )
                        }
export default Home