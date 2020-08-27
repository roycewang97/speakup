import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

class Nav extends Component {

    render() {
        return <div className="nav-container">
            <Link to="/about" className="nav-items"> <div > About </div> </Link>
            <Link to="/services" className="nav-items"> <div> Services </div> </Link>
            <Link to="/dropbox" className="nav-items"> <div> Dropbox </div> </Link>
            <Link to="/contact" className="nav-items"> <div> Contact </div> </Link>
        </div>
    }
}

export default Nav;