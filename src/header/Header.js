import React from 'react'
import { Link } from 'react-router-dom'
import { Button ,Navbar, NavbarBrand} from 'reactstrap'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  
  <Navbar color="light" light expand="md">
  <NavbarBrand href="/">Neon</NavbarBrand>
  <header className="main-header">
    { user && <span>Welcome, {user.email}</span>} 
   { user ? authenticatedOptions : unauthenticatedOptions }
    { alwaysOptions }
     </header>
    </Navbar>
    
 
)

export default Header
