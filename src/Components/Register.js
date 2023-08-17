import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { myContext } from "./Context";

function Register() {
  const [Firstname,setFirstname]= useState("")
  const [Lastname,setLastname]=useState("")
  const [Email,setEmail]= useState("")
  const [Password,setPassword]= useState("")
  const {userData,setUserData}=useContext(myContext)
  const handlesubmit = (e) => {
    e.preventDefault();
    setUserData ((info)=>info=[...userData,{Firstname:Firstname,Lastname:Lastname,Email:Email,Password:Password}])
    alert("Registered Successfully")
  }

  return (
    <>
    <div className="Register">
      <form onSubmit={handlesubmit}className="register-form">
        <h1>Register New Account</h1>
        <div className="form-group">
          <label htmlFor="Firstname">Firstname</label>
          <input type="text" className="form-control" placeholder="Enter your Firstname" onChange={(e)=>{setFirstname(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="Lastname">Lastname</label>
          <input type="text" className="form-control" placeholder="Enter your Lastname" onChange={(e)=>{setLastname(e.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input type="email" className="form-control" placeholder="Enter your Email" onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="password" className="form-control" placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      </form>
      <div className="mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
    </>

  );
}

export default Register;
