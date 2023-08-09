import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css'


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart3">
                    <ShoppingCart width={32}/>
                   </Link>
            </div>
        </div>
    );
}
export default Navbar;