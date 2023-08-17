import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { myContext } from "./Context";



function Login() {
  const { userData } = useContext(myContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const{isLoggedIn,setIsLoggedIn}=useContext(myContext);

  const handleClick = (e) => {
    e.preventDefault();
   
    const userinfo=userData.filter((info)=>info.Email===email&& info.Password===password)
   
      if(userinfo.length>0){
        setIsLoggedIn(!isLoggedIn);
        navigate('/');
      }
    }
  
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleClick}>
            <h1 className="mb-4">Login to your Account</h1>
            <div className="form-group">
              <label htmlFor="Username">Username/Email</label>
              <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <Link to="/forgot-password" className="d-block mb-4">Forgot Password?</Link>
            <div className="loginandadmin">
               <button  type="submit" className="btn btn-primary btn-block">Log in</button>
               
               <Link to="/Adminlogin" className="d-block mb-4"  >Admin</Link>
               
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
