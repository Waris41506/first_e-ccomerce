import React, { useState, useEffect } from 'react';
import "./Navbar.css"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { Link } from "react-router-dom"
import CartBox from './CartBox';


const Navbar = ({ addedCartCount }) => {
  const [iconMenu, setIconMenu] = useState(false)
  // const [cartCount, SetCartCount] = useState(10)


  useEffect(() => {
    setIconMenu(true)
  }, [])


  const handleCartCount = () => {
    alert("Cart added")
  }

  return (
    <nav>
      <h1>LoGo</h1>
      <div id='menu-link' className={iconMenu ? "showmenu" : "showmenu-mobile"}>
        <div className="nav-links">
          <Link to="/" onClick={() => setIconMenu(true)}>Home</Link>
          <Link to="/about" onClick={() => setIconMenu(true)}>About</Link>
          <Link to="/service" onClick={() => setIconMenu(true)}>Service</Link>
          <Link to="/contact" onClick={() => setIconMenu(true)}>Contact</Link>
        </div>

        <div className="login-0r-signUp" >
          <Link to="login" onClick={() => setIconMenu(true)}>

            <h2>LogIn / </h2>
          </Link>
          <Link to="signup" onClick={() => setIconMenu(true)} >

            <h2>SignUp</h2>
          </Link>
        </div>

      </div>
      <CartBox addedCartCount={handleCartCount} />

      <div className='menu' onClick={() => setIconMenu(!iconMenu)}>{iconMenu ? <FiMenu size={30} color="white" /> : <MdClose size={30} color="white" />}</div>

    </nav>
  );
}

export default Navbar;