import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Context";

function Compnavbar() {
  const { isLoggedIn,setIsLoggedIn } = useContext(myContext);
  const { userData,setSearch } = useContext(myContext);
  const {cart}=useContext(myContext);
  

  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            {" "}
            <b> Foot SPACE </b>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => {
                  navigate("/ ");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link onClick={()=> navigate('/Products')}>Shop Everything</Nav.Link>
              <Nav.Link onClick={()=> navigate('/Productmen')}>Men</Nav.Link>
              <Nav.Link onClick={()=> navigate('/Productwomen')}>Women</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>

            {isLoggedIn===true? (
              <NavDropdown
                title=<i className="fa-solid fa-user" id="basic-nav-dropdown">
                  <sup>{userData[userData.length - 1].Firstname}</sup>
                </i>
              >
                <NavDropdown.Item onClick={() => setIsLoggedIn(!isLoggedIn)}>
                  Logout
                </NavDropdown.Item>
                
              </NavDropdown>
            ) : (
              <NavDropdown
                title=<i className="fa-solid fa-user" id="basic-nav-dropdown">
                  <sup></sup>
                </i>
              >
                <NavDropdown.Item onClick={() => navigate("/Login")}>
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Register")}>
                  Register
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=> { setSearch(e.target.value)}}
              />
              <Button variant="outline-success">Search</Button>
              {isLoggedIn===true?<nav>
                <Nav.Link>
                  <i
                    onClick={() => navigate("/Shoppingcart")}
                    className="fa-solid fa-cart-shopping"
                  >{cart.length>0?<sup>{cart.length}</sup>:null}</i>
                </Nav.Link>
              </nav>:null}
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Compnavbar;
