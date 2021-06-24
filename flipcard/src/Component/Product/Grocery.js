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
import Bred from '../../img/Bis.jpg'
import chees from '../../img/chees.jpg'
import oil from '../../img/sun.jpg'
import rice from '../../img/rice.jpg'
import egg from '../../img/eg.jpg'
import milkpo from '../../img/milkpow.jpg'
import shoo from '../../img/s.jpg'
import ssss from '../../img/ssss.jpg'
import sevenrice from '../../img/7.jpg'
import '../../CSS/Style.css'
import Mobile from "./Mobile";
import "slick-carousel/slick/slick-theme.css";
export default function Grocery(){

      const settings = {
        
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    const slidesData = [
        {
          image:Bred,
          name: 'Fresh Bread',
          pric:100
        },
        {
            image :chees,
            name: 'Orginal Chees',
            pric:'300 KG' 
        },
        {
    
            image :oil,
            name: 'Sunflower Oil',
            pric:'200 Ltr'
        }, {
            image :rice,
            name: 'Jasmin Rice',
            pric:1800
        }, {
      
            image :egg,
            name: 'Egg',
            pric:'10 per '
        },
        {
            image :milkpo,
            name: 'Milk Powder',
            pric:300
        },

        {
            image :sevenrice,
            name: '77 Rice',
            pric:1500
        },

      ];
    
    return (
      <div className="grocerysection">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                  
                    </div>
                    <div className="col-md-2">
                        <h2 className="topoffer">Grocery</h2>
                        <hr className="hrline"/>
                    </div>
            </div>
      </div>
            <Slider {...settings} className="slickimg ">
                {slidesData.map((slide) =>
                    <div className="slick-slide">
                        <img src={slide.image} className="imggs" />
                        <p class="procutname">{slide.name}</p>
                        <p className="" id="price">Rs. {slide.pric}</p>
                    </div>
                )}
            </Slider>
            <Mobile/>
      </div>
    );
  
}