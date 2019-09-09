import React from 'react'
import { Link } from 'react-router-dom'
import { Button ,Navbar, NavbarBrand} from 'reactstrap'

import './Header.scss'



const authenticatedOptions = (
  <React.Fragment class="navbar" >
    <Link to="/change-password">Change Password . </Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment class="navbar">
    <Link className="nav-links" to="/sign-up">Sign Up</Link>
    <Link className="nav-links" to="/sign-in">Sign In</Link>
  </React.Fragment>
)

// let mainNav = document.getElementById("js-menu");
// let navBarToggle = document.getElementById("js-navbar-toggle");

// navBarToggle.addEventListener("click", function() {
//   mainNav.classList.toggle("active");
// });


const Header = ({ user }) => (
  
  <Navbar className="navbar">
    
<span className="navbar-toggle" id="js-navbar-toggle">
          <i className="fas fa-bars" />
        </span>
        <img className="logo" src="./assets/neonLogo.png" alt="logo" />
        {/* <a href="#" className="logo">NEON</a> */}
    <ul  className="main-nav" id="js-menu" >
     <li>
       <Link className="nav-links" to="/products">Products</Link></li>
     <li>
       <Link className="nav-links" to="/cart"><i className="material-icons">My Cart</i></Link></li>
   
   </ul>

  <header className="main-header">
    { user && <span>Welcome, {user.email}</span>} 
   { user ? authenticatedOptions : unauthenticatedOptions }

  </header>

  <Link to="/create" className="nav-links"> Create product </Link>

  </Navbar>
 
)

export default Header
