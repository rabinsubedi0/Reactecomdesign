import React from 'react'
import Topnavbar from './Topnavbar';
import Category from '../Category/Category';

export default function Navbar() {
    return (
        <div>
            <section>
                <Topnavbar />
                <nav class="navbar navbar-expand-sm navbar-light bg-light" id="mainnav">

                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}

                    <div class="navbar-collapse ">
                        <ul class="navbar-nav" id="mylist">
                        <li class="nav-item active"  id="listing">
                                <a class="nav-link" id="mainmenu" href="#"> </a>
                            </li>
                            <li class="nav-item active"  id="listing">
                                <a class="nav-link" id="mainmenu" href="#">Home </a>
                            </li>
                            <li class="nav-item" id="listing">
                                <a class="nav-link" id="mainmenu" href="#">AboutUs</a>
                            </li>
                            <li class="nav-item" id="listing">
                                <a class="nav-link" id="mainmenu" href="#">Service</a>
                            </li>
                            <li class="nav-item" id="listing">
                                <a class="nav-link" id="mainmenu" href="#">Blog</a>
                            </li>
                            <li class="nav-item" id="listing">
                                <a class="nav-link" id="mainmenu" href="#">ContacUs</a>
                            </li>



                        </ul>
                    </div>

                </nav>
            </section>
            <Category />
         
        </div>
    )
}
