import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <span className='logo'>Redux Store</span>
        <div>
            <Link className='nav-link' to={"/"}>Home</Link>
            <Link className='nav-link' to={"/cart"}>Cart</Link>
            <span className='cart-count'>cart items:0</span>
        </div>
    </div>
  )
}

export default Navbar