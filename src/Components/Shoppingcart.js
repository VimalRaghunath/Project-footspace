import React, { useContext } from 'react'
import { myContext } from './Context'
import { Button, Card, Col, Container, Row, Image, Form } from 'react-bootstrap'
import Compnavbar from './Compnavbar';



function Shoppingcart() {
    const {cart,setCart} = useContext(myContext);
   
    const Delete=(id)=> {
      setCart((d)=> d.filter((item)=> item.id !== id))
    }

    const handleDecrement = (id) => {
      const updatedCart = cart.map((item) => {
        if (item.id == id && item.qty > 1) {
           return { ...item, qty: item.qty - 1 }
        }
        return item;
      })

      setCart(updatedCart)
    }

      // increment function


    const handleIncrement =(id) => {
       const updatedCart = cart.map((item)=>{
        if (item.id == id) {
           return { ...item, qty: item.qty + 1 }
         }
           return item
       })

       setCart(updatedCart)
    }


  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <header className="sticky-top"><Compnavbar/></header>
        <Container className="py-5 h-100">
            <Row className="justify-content-center align-items-center h-100">
                <Col lg="8">
                    {cart.map((item)=>(
                     <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }} key={item.id}>
                       <Card.Body className="p-0">
                         <Row className="g-0">
                            <Col md="2" lg="2" xl="2">
                                <Image
                                  src={item.image}
                                  fluid
                                  rounded
                                  alt="Cotton T-shirt"
                                  />
                            </Col>
                             <Col md="3" lg="3" xl="3">
                                <p className="text-muted"></p>
                                <p className="text-black mb-0">{item.name}</p>
                             </Col>
                             <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                                <Button variant="link" className="px-2">

                                </Button>

                                <div>
                                  
                                  
                                    <button
                                        className='countbtn'
                                        onClick={()=>handleDecrement(item.id)}
                                    >
                                       -
                                    </button>
                                    <span className='count'>{item.qty}</span>
                                    <button
                                      className='countbtn'
                                      onClick={()=>handleIncrement(item.id)}
                                    >
                                       +
                                    </button>
                                </div>
                                  
                                {/* <Form.Control type="number" min="1" defaultValue={1} size="sm" />
                                 <Button variant="link" className="px-2">

                                 </Button>  */}
                             </Col>
                             <Col md="3" lg="2" xl="2" className="text-end">
                                <p className="mb-0"><h2>Rs.{ item.price * item.qty }</h2></p>
                             </Col>
                              <Button variant='warning'>Buy Now</Button>
                              <Col md="1" lg="1" xl="1" className="text-end">
                                <a href="#!" className="text-muted">

                                </a>
                              </Col>
                              <Button variant='secondary' onClick={()=>Delete(item.id)}>Delete</Button>
                              <Col md="1" lg="1" xl="1" className="text-end">
                                <a href="#!" className="text-muted">

                                </a>
                              </Col>
                           </Row>

                             <hr className="my-4" />

                       </Card.Body>
                     </Card>  
                     ))}
                   </Col>
                  
                  <Col lg="4" className="bg-grey">
                    <div className="p-5">
                        {/* <h3 className="fw-bold mb-5 mt-2 pt-1"></h3> */}
                         <h3>Shop your product</h3>
                         <hr className="my-4"/>
                    </div>
                  </Col>

            </Row>
        </Container>
    </section>

  )
}

export default Shoppingcart
