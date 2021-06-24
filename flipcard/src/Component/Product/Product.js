import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import tshirt from '../../img/t.jpg'
import Carousel from 'react-elastic-carousel';
import Slide from './Card'

export default function Product() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 568, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ];
    return (
     <div>
 
	
			{/* <div id="a" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<div class="carousel-item active">
						 <div class="container">
						 	<div class="row">
						 		<div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
						 		</div>
                                 <div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
						 		</div>
						 		<div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
                                </div>
                                
                                <div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
						 		</div>
						 	</div>
						 </div>
					</div>
					<div class="carousel-item">
						 <div class="container">
						 	<div class="row">
                             <div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
						 		</div>
                                 <div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
						 		</div>
						 		<div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
                                </div>
                                
                                <div class="col-sm-12 col-lg-3">
						 			<div class="maintaincard">
						 				<img src={tshirt}   class="card-img-top productimage"  />
						 				<div class="card-body">
						 					<p class="card-title text-center">Black man T-shirt</p>
                                            <p className="text-center" id="price">Rs. 1500</p>
                                            <a className="btn" id="addtocard"> <AddShoppingCartIcon className="addtocart" />Cart</a>
						 				</div>
						 			</div>
						 		</div>
						 	</div>
						 </div>
					</div>
				</div>
				<a class="carousel-control-prev" href="#a" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#a" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
			</div> */}

			<Slide/>

            {/* <Carousel breakPoints={breakPoints}>
                <Card number="1">
                    <h1>hahaha</h1>
                </Card>
                <Card number="2" />
                <Card number="3" />
                <Card number="4" />
                <Card number="5" />
                <Card number="6" />
                <Card number="7" />
                <Card number="8"/>
            </Carousel> */}
            
		</div>
	
    )
}
