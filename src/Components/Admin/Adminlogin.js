import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../Context'
import { Button, Form } from 'react-bootstrap'
import { Admindummy } from './Admindummy'

function Adminlogin() {

    const { admindata } = useContext(myContext)
    const [Email,setEmail] = useState(" ")
    const [Password,setPassword] = useState(" ")
    const navigate = useNavigate()

    console.log(Admindummy);

    console.log(Email)
    console.log(Password);

    const handleClick = (e) => {
      e.preventDefault();

      
      if("Admin@gmail.com"==Email&&123456==Password){
        navigate('/Adminhome')
          
      }
      else{
        alert("invalid login");
      }

    }
    
  return (
    <>
    <div className="admin-container">
    <div className='adminlogin'>
    <h2 className='adminloginh2'>Admin Login</h2>
      
      <form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email Address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} /> 
       </Form.Group>
         
        <Button variant='primary' type='submit' onClick={(e)=>handleClick(e)}>
          Login
        </Button>

      </form>

    </div>
    </div>
    </>
  )
}

export default Adminlogin
