import React from "react";
import {Link} from 'react-router-dom';

function NavBar () {

    return (
        <nav className="navbar">
            <Link to="/">Home Page </Link>

            <Link to="/MovieDetails">Movie Description</Link>

            <Link to="/AddMovie">Add New Movie</Link>
        </nav>
    )
}

export default NavBar;