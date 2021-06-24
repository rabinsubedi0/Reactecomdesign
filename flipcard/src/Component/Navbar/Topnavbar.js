import React from 'react'
import '../../CSS/Style.css';
import logo from '../../img/logo.png'
import facebook from '../../img/facebook.png'
import google from '../../img/google.png'
import instagram from '../../img/instagram.png'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
export default function Topnavbar() {
    return (
        <div>
            <section className="topmenu">
                <nav class="navbar navbar-expand-lg topnavigation">
                    <a class="navbar-brand" href="#"><img src={logo} /></a>
                    <div class="navbar-collapse" >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><img src={facebook} /> <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><img src={google} /> <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><img src={instagram} /> <span class="sr-only">(current)</span></a>
                            </li>

                            <Input
                                type="text"
                                className="inputline text-white"
                                placeholder="Search Products"
                                endAdornment={
                                    <InputAdornment position="end" >
                                        <IconButton className="text-white view">
                                        <SearchIcon className="text-white" />
                                        </IconButton>
                                    </InputAdornment>

                                }
                            />
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <a className="loginbtn" href="#">Login</a>
                            <a href="#"  className="leftmenu"> <AddShoppingCartIcon className="cartbtn"></AddShoppingCartIcon> Cart </a>
                        </form>
                    </div>
                </nav>
            </section>
        </div>
    )
}
