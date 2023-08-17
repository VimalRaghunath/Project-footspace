import React from 'react'

function Homefooter() {
  return (
    <div className='homefooter'>
      <h3><b>Foot SPACE</b></h3>
      <div className='quotes'>
         <h5><i>"Fashion is the armor to survive the reality of everyday life.<br/>
            You can wear anything as long as you put a nice pair of shoes with it."</i></h5>
      </div>

      <div className='Aboutmain'>
        <div className='Shop'> 
           <h3><b>Shop</b></h3>
           <h5> Shop Men <br/>
                Shop Women  <br/>
                Lookbook <br/>
                Gift Card  <br/>
                Sale   </h5>
        </div>


        <div className='About'> 
         <h3><b>About</b></h3>
         <h5> Our Story <br/>
              Our Materials  <br/>
              Our Value  <br/>
              Sustainability  <br/>
              Manufacture   </h5>
        </div>

        <div className='Need Help'>
        <h3><b>Need Help?</b></h3>
         <h5> FAQs <br/>
              Shipping & Returns  <br/>
              Shoe Care  <br/>
              Size Chart <br/>
              Contact Us  </h5>
        </div>
        
      </div>

      <div>
        <i className="fa-brands fa-pinterest-p"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className ="fa-brands fa-twitter"></i>
      </div>

    </div>  



  )
}

export default Homefooter
