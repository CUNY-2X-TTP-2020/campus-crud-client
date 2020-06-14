import React from "react";
import { Link } from "react-router-dom";

const NavbarView = (props) =>
{
    return (
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/campuses"><button>Campuses</button></Link>
            <Link to="/students"><button>Students</button></Link>
        </nav>
    );
};

export default NavbarView;