import { useContext } from "react"
import { myContext } from "../Context"
import { useNavigate } from "react-router-dom"
import Compnavbar from "../Compnavbar"
import {Card} from "react-bootstrap"
import Button from 'react-bootstrap/Button';


function Productwomen(){
      const data1=useContext(myContext)
      const {Products} = data1
      const navigate= useNavigate()

      const data=Products.filter((item)=>item.type==='women')

    return(
      <div>
        <header className="sticky-top"><Compnavbar/></header>
           <h2 className="shopwomen">Shop Women</h2>
           <div className="productsdiv">

           {data.map((item)=>(
                <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem"}} key={item.id}>
                    <Card.Img
                       variant="top"
                       src={item.image}
                    />
                  <Card.Body>
                     <Card.Title>{item.model}</Card.Title>
                     <h5>Rs.{item.price}</h5>
                     <Button variant="primary" onClick={()=>navigate(`/view/${item.id}`)}>View Product</Button>
                  </Card.Body>  
                </Card>

            ))}

       </div>

      </div>
    )
}

export default Productwomen