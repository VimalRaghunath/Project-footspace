import React, { useContext } from "react";
import { myContext } from "../Context";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Compnavbar from "../Compnavbar";
import Button from "react-bootstrap/Button";

function Viewproduct() {
  const { Products } = useContext(myContext);
  const { cart, setCart } = useContext(myContext);
  const { isLoggedIn } = useContext(myContext);
  const { id } = useParams();
  const data = Products.filter((item) => item.id === parseInt(id));
  const navigation = useNavigate();

  const handlesubmit = () => {
    if (isLoggedIn) {
      if (cart.includes(data[0])) {
        alert("This Product is Already added");
      } else {
        setCart([...cart, ...data]);
        alert("succesfully added to cart");
      }
    }else{
      alert('please loggin')
    }
    
  };

  return (
    <div>
      <header className="sticky-top">
        <Compnavbar />
      </header>

      <div className="browsediv">
        <div>
          <img className="browseimage" src={data[0].image} alt="not found" />
        </div>
        <div className="browsechild">
          <h2 className="browsename">{data[0].model}</h2>
          <h4 className="browseprice">{data[0].price}</h4>
          <p className="browseprice">{data[0].desc}</p>
          <Button onClick={handlesubmit}> Add to Cart </Button> &nbsp;
          <Button variant="warning" onClick={() => navigation("/Shoppingcart")}>
            {" "}
            Buy Now{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Viewproduct;
