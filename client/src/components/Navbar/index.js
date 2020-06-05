import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light navbar scrolled-light" id="navbar">
      <div className="container">
        <Link className="navbar-brand mr-" to="/">Google Book Search</Link>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
          
          <div className="nav-item"><Link className="nav-link" to="/search">Search Books</Link></div>
          <div className="nav-item"><Link className="nav-link" to="/saved">Saved Books</Link></div>

        </button>
        <div className="collapse navbar-collapse" id="collapsingNavbar" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/search">Search Books</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/saved">Saved Books</Link></li>        
          </ul>
        </div>
      </div>
    </nav>
);

export default Navbar;