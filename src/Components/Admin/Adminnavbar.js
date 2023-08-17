import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function Adminnavbar() {
  const navigate = useNavigate()
  return (
    <div className="Adminnavbar">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="ad-nav-c">
          <Navbar.Brand>
            <b>ADMIN</b>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate("/Adminhome")}}>Products</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/AdminAddproduct")}}>Add Product</Nav.Link>
            <Nav.Link onClick={()=>{ navigate("/AdminUsers")}}>Users</Nav.Link>
          </Nav>
        
          <NavDropdown title={<i style={{ color: "white" }} class="fa-regular fa-user"></i>} id="basic-nav-dropdown" className="Adminlogout">
            
              <NavDropdown.Item  onClick={() => { navigate("/"); }}> Logout </NavDropdown.Item>
               
          </NavDropdown>    
          
        </Container>
      </Navbar>
    </div>
  );
}

export default Adminnavbar;
