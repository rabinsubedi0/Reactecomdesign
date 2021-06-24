// import React from 'react';
// import '../../CSS/Style.css'
// // const Card = ({number}) =>
// //     <div className="productcard">
// //         <h1 number={1} >hahah</h1>
// //         {number}
// //     </div>
     

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";



// export default Card;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import tshirt from '../../img/t.jpg'
import iphone from '../../img/11.jpg'
import free from '../../img/2971.jpg'
import treeking from '../../img/cp.jpg'
import mac from '../../img/422.jpg'
import jepant from '../../img/jepant.jpg'
import shoo from '../../img/s.jpg'
import ssss from '../../img/ssss.jpg'
import he from '../../img/he.jpg'
import '../../CSS/Style.css'
import "slick-carousel/slick/slick-theme.css";
import Grocery from "./Grocery";
export default function Slide(){

      const settings = {
        
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    const slidesData = [
        {
          image:tshirt,
          name: 'Black T-shirt',
          discount: 1200,
          pric:1700
        },
        {
            image :iphone,
            name: 'I Phone 11',
            discount: 150500,
            pric:150000 
        },
        {
    
            image :free,
            name: 'Refrigerator',
            discount: 18500,
            pric:18000
        }, {
            image :treeking,
            name: 'Treeking  bag',
            discount: 800,
            pric:700
        }, {
      
            image :mac,
            name: 'Mac Desktop',
            discount: 2500000,
            pric:2400000
        },
        {
            image :shoo,
            name: 'Rebook shoes',
            discount: 1000,
            pric:800
        },

        {
            image :he,
            name: 'Headphone',
            discount: 500,
            pric:300
        },
        {
            image :jepant,
            name: 'Man Jeans Pants',
            discount: 1200,
            pric:1000
        },



       

      ];
    
    return (
      <div className="products">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                  
                    </div>
                    <div className="col-md-2">
                        <h2 className="topoffer">Top Offer</h2>
                        <hr className="hrline"/>
                    </div>
            </div>
      </div>
            <div className="">
                <div className="row">
                 
                    <div className="col">
                    <Slider {...settings} className="slickimg ">
                {slidesData.map((slide) =>
                    <div className="slick-slide">
                        <img src={slide.image} className="imggs" />
                        <p class="procutname">{slide.name}</p>
                        <p className="" id="offer">Rs. {slide.discount}</p>
                        <p className="" id="price">Rs. {slide.pric}</p>
                    </div>
                )}
                            </Slider>
                            </div>
                    </div>
              
           </div>

            <Grocery/>
      </div>
    );
  
}