import React from 'react'
import toy from '../../img/toys.png'
import offer from '../../img/offer.png'
import smartphone from '../../img/smartphone.png'
import gr from '../../img/grocery.png'
import fashon from '../../img/fashon.png'
import travel from '../../img/travel.png'
import electronic from '../../img/electronics.png'
import home from '../../img/house.png'
import a2 from '../../img/s8.jpg'
import p from '../../img/image.jpg'
import Product from '../Product/Product'
import h from '../../img/fff.jpg'

export default function Category() {
    return (
        <div>
            <section className="">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-3 container">
                            <div className="categorycard">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Categories</h5>
                                        <div className="categoryline"></div>
                                        <ul className="navbar-nav" id="categorylist">
                                        <li className="nav-item" >
                                            <a className="nav-link" href="#">  <img src={offer}/> Top Offers</a>
                                            </li>
                                            <li className="nav-item" >
                                            <a className="nav-link" href="#">  <img src={gr}/> Grocery</a>
                                            </li>
                                            <li className="nav-item" >
                                            <a className="nav-link" href="#">  <img src={smartphone}/> Mobile</a>
                                        </li>
                                        <li className="nav-item" >
                                            <a className="nav-link" href="#"> <img src={fashon}/> Fashion</a>
                                        </li>
                                        <li className="nav-item" >
                                            <a className="nav-link" href="#">  <img src={electronic}/> Electronics</a>
                                            </li>
                                            <li className="nav-item" >
                                            <a className="nav-link" href="#">  <img src={home}/> Home</a>
                                        </li>
                                        <li className="nav-item" >
                                            <a className="nav-link" href="#">  <img src={travel}/> Travel</a>
                                            </li>
                                            <li className="nav-item" >
                                           <a className="nav-link catlink" href="#">  <img src={toy}/>   BEauty, Toys & More</a>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-9">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block" src={a2} alt="First slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block" src={p} alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src={h} alt="Third slide" />
                                </div>
                            </div>
                                <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                        </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <Product/>
        </div>
    )
}
