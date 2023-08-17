import React, { useContext } from "react";
import Compnavbar from "./Compnavbar";
import Mainslide from "./Mainslide/Mainslide";
import Homefooter from "./Homefooter";
import { myContext } from "./Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


function Home() {
  const { Products } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <div >
      <div className="sticky-top"> {<Compnavbar />} </div>
      <div>
        <Mainslide />
      </div>
      <div className="new">
        <h1> New Arrivals </h1>

        {Products.map((item) => (
          <div className="d-inline-flex" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.model}</Card.Title>

                <h5>Rs.{item.price}</h5>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/view/${item.id}`)}
                >
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      
    
        <Homefooter />
    
    </div>
  );
};

export default Home;
