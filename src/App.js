import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from "react-router-dom"
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { useState } from 'react';
import { myContext } from './Components/Context';
import Viewproduct from './Components/Products/Viewproduct';
import { ShoesData } from './Components/Products/ShoesData';
import Shoppingcart from './Components/Shoppingcart';
import { Dummy } from './Dummy';
import Productmen from './Components/Products/Productmen';
import Productwomen from './Components/Products/Productwomen';
import Adminlogin from './Components/Admin/Adminlogin'
import { Admindummy } from './Components/Admin/Admindummy';
import Adminhome from './Components/Admin/Adminhome'
import AdminAddproduct from './Components/Admin/AdminAddproduct';
import AdminEdititem from './Components/Admin/AdminEdititem';
import AdminUsers from './Components/Admin/AdminUsers';
import Productsss from './Components/Products/Productsss';



function App() {
  const [Products,setProducts]=useState(ShoesData)
  const [cart,setCart]=useState([])
  const [userData,setUserData]=useState(Dummy)
  const [search,setSearch]=useState('')
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [Admindata,setAdmindata]=useState(Admindummy)

  return (
    <div>
    <myContext.Provider value={{Products,search,setSearch,cart,setCart,userData,setUserData,isLoggedIn,setIsLoggedIn,Admindata,setAdmindata,setProducts,}} >   
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/view/:id' element={<Viewproduct/>}/>
        <Route path='/shoppingcart' element={<Shoppingcart/>}/>
        <Route path='/productmen' element={<Productmen />}/>           
        <Route path='/productwomen' element={<Productwomen />}/>
        <Route path='/Adminlogin' element={<Adminlogin/>}/>
        <Route path='/Adminhome' element={<Adminhome/>}/>
        <Route path='/AdminAddproduct' element={<AdminAddproduct/>}/>
        <Route path='/AdminEdititem/:id' element={<AdminEdititem/>}/>
        <Route path='/AdminUsers' element={<AdminUsers/>}/>
        <Route path='/Products' element={<Productsss/>}/>
       </Routes>
    </myContext.Provider> 
    </div>
  );
}

export default App;
