import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { myContext } from "../Context";
import Compnavbar from "../Compnavbar";


function Productsss() {
  const navigate = useNavigate();
  const { Products, search } = useContext(myContext);
    const searchFilter=Products.filter((item)=> search.toLowerCase() === " "?item:item.model.toLowerCase().includes(search))

  return (
    <div>
      <Compnavbar/>
      <div className="new">

        <h1> New Arrivals </h1>

        {searchFilter.map((item) => (
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
      
    </div>
  );
}

export default Productsss;
