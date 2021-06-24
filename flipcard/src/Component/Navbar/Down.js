import React from 'react'
import visa from '../../img/visa.png'
import master from '../../img/mastercard.png'
import gg from '../../img/gg.png'
import facebook from '../../img/facebook.png'
import google from '../../img/google.png'
import instagram from '../../img/instagram.png'
export default function () {
    return (
        <div>
        
        <div class="topfooter mt-5">
          
    <div class="container">
      <div class="row">
        <div class="col-md-2"> </div>
        <div class="col-md-2">
          <h6 class="justify-text text-white">Subscribe  For Notification</h6>
        </div>
        <div class="col-md-4">
          <div class="form-group">
         
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
           
          </div>
        </div>
        <div class="col-md-4">
          <div class="ftbtn">
            <button type="btn" class="btn text-white">Subscribe</button>
           </div>
        </div>
        <div class="col-md-"> </div>
      </div>
    </div>
  </div>

  <div class="mainfooter">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="footerhead">
                  <p id="heads">Helps</p>
                  <hr className="footerhr"/>
            <a href=""> <p>Order status by number</p></a>
            <a href=""> <p>Support Center</p></a>
            <a href=""> <p>How to palce on oder</p></a>
            <a href=""> <p>How to choose a size</p></a>
            <a href=""> <p>Term of delivery</p> </a>
            <a href="">  <p>My orders</p></a>
           <a href=""> <p>Return</p></a>
          <a href="">  <p>Offers</p></a>
            <a href=""><p>Loyalaty program</p></a>
            <a href=""><p>Partner Good</p></a>
          </div>
        </div>

        <div class="col-md-3">
         <div class="followcard">
                  <p id="heads">Follow us</p>
                  <hr className="footerhr"/>
                  
                  <div class="row">
                    
         <div class="mysicon">
         <ul class="navbar-nav" id="">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><img src={facebook} /> <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><img src={google} /> <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><img src={instagram} /> <span class="sr-only">(current)</span></a>
                            </li>

                        </ul>
         <div class="followtext"> <p>For Partners</p>
          <p>Connect to the affiliate program
            "Marketplace"</p>
            
         </div>
         </div>
          </div>
         </div>
        </div>

        <div class="col-md-3">
         <div class="paymentcard">
                  <p id="heads">Payment Methods</p>
                  <hr className="footerhr"/>
          <div class="paymentmethod">
            <i class="" id="card" aria-hidden="true"><img src={master} height="60" id="paymentimage"  alt="" /></i>
            <i class="" id="visa" aria-hidden="true"><img src={visa} id="paymentimage"   height="60" alt="" /></i>
            <div class="paytext">
              <p>
                You can pay for purchases
                cash on delivery, or
                choose another payment method.</p>
            </div>
          </div>
         </div>
        </div>

        <div class="col-md-3" id="mobile">
                <p id="heads">For mobile devices</p>
                <hr className="footerhr"/>
          <div class="paymentmethod">
         
          <img src={gg} height="50" alt="" />
            <p>
              You can pay for purchases cash on delivery, or choose another payment method.</p>
          </div>
        </div>
      
     
      </div>
     
        <p id="copyright">© Copyright Ecommerce 2021, all rights reserved. Terms & Privacy.</p>
     
    </div>
  </div>

        </div>
    )
}
