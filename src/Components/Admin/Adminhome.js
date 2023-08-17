import React, { useContext } from 'react'
import Adminnavbar from './Adminnavbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../Context';



function Adminhome() {
  const {Products,setProducts} = useContext(myContext);
  const deleteItem = (id) => {
    const afterDeleted=Products.filter((item)=>item.id!=parseInt(id));
    setProducts(afterDeleted);
  }

  const navigate=useNavigate();

  return (
    <>
         <Adminnavbar/>
       
      <div className='allproducts'>
          <h1> All Products </h1> 
      </div>

       <div className='eachproducts'>
      
        {Products.map((item)=>(<div className='d-inline-flex' key={item.id}>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image}/>
            <Card.Body>
            <Card.Title>{item.model}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
             <h5>Rs.{item.price}</h5>
            <Button variant="info" onClick={()=>navigate(`/AdminEdititem/${item.id}`)}>Edit item</Button>&nbsp;
            <Button variant="dark" onClick={()=>deleteItem(item.id)}>Delete item</Button>
           </Card.Body>
         </Card>
       </div>

    ) )}

    </div>
       
    </>
  )
}

export default Adminhome
