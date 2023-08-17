import { Carousel, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Mainslide() {
  const navigate=useNavigate();
  return (
    <Carousel id='home'>
      <Carousel.Item>
        <Image src={require("./images/img-1.jpg")} alt='Photo' className='w-100'/>
        <Carousel.Caption>
        <div className="carousel-buttons d-flex justify-content-center">
          <button className='men' onClick={()=>{navigate('/productmen')}}  >Shop MEN</button>&nbsp;
          <button className='men' onClick={()=>{navigate('/productwomen')}}  >Shop WOMEN</button>
        </div>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./images/img-2.jpg")} alt='Photo' className='w-100'/>
        <Carousel.Caption>
        <div className="carousel-buttons d-flex justify-content-center"  >
          <button className='men' onClick={()=>{navigate('/productmen')}}>Shop MEN</button>&nbsp;
          <button className='men' onClick={()=>{navigate('/productwomen')}} >Shop WOMEN</button>
        </div>
          
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <Image src={require("./images/img-3.jpg")} alt='Photo' className='w-100'/>
        <Carousel.Caption>

        <div className="carousel-buttons d-flex justify-content-center">
          <button className='men' onClick={()=>{navigate('/productmen')}}  >Shop MEN</button>&nbsp;
          <button className='men' onClick={()=>{navigate('/productwomen')}}  >Shop WOMEN</button>
        </div>
          
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>

    
  );
}

export default Mainslide;







// import { Button, Carousel, Image, Container, Row, Col } from 'react-bootstrap';

// function Mainslide() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col>
//           <Carousel id='home'>
//             <Carousel.Item style={{ height: "100vh" }}>
//               <Image src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt='Photo' className='w-100' />
//               <Carousel.Caption>
//                 {/* <Button variant="outline-light">Light</Button>{' '} &nbsp;
//                 <button className='men'>Shop WOMEN</button> */}
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item style={{ height: "100vh" }}>
//               <Image src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt='Photo' className='w-100' />
//               <Carousel.Caption>
//                 <h3><span className='text-muted'>"Celebrating</span> the Miracle of Life!"</h3>
//                 <p><span className='text-muted'>"Every coo, every cuddle,</span> a reminder of life's purest miracles."</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item style={{ height: "100vh" }}>
//               <Image src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt='Photo' className='w-100' />
//               <Carousel.Caption>
//                 <h3 className='text'> "Join Us on this Journey of Parenthood!"</h3>
//                 <p>
//                   "Together, we'll create memories that sparkle like stardust."
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Mainslide;
