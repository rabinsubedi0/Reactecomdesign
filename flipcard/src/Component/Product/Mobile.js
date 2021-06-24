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
import iphone from '../../img/11.jpg'
import samsung from '../../img/samsung.jpg'
import Moto from '../../img/moto.jpg'
import note from '../../img/note.jpg'
import oppo from '../../img/oppo.jpg'
import v from '../../img/v.jpg'
import i5 from '../../img/i5.jpg'
import down from '../Navbar/Down'

import '../../CSS/Style.css'
import "slick-carousel/slick/slick-theme.css";
export default function Mobile(){

      const settings = {
        
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    const slidesData = [
        {
          image:iphone,
          name: 'I phone 11 ',
          pric:100000
        },
        {
            image :samsung,
            name: 'Samsung S15',
            pric:'15000' 
        },
        {
    
            image :Moto,
            name: 'Motorola G10',
            pric:'16000'
        }, {
            image :note,
            name: 'Redmi note 8 ',
            pric:18500
        }, {
      
            image :oppo,
            name: 'Oppo F15',
            pric:'32000 '
        },
        {
            image :v,
            name: 'Vivok V15',
            pric:33000
        },

        {
            image :i5,
            name: 'I Phone 5',
            pric:80000
        },

      ];
    
    return (
      <div className="grocerysection">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                  
                    </div>
                    <div className="col-md-2">
                        <h2 className="topoffer">Mobile Phone</h2>
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
           
            <down />
            
      </div>
    );
  
}