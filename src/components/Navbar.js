import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const count = useSelector((state)=>state.cart)
  return (
    <div className='navbar-wrapper'>
        <span className='logo'>Redux Store</span>
        <div>
            <Link className='nav-link' to={"/"}>Home</Link>
            <Link className='nav-link' to={"/cart"}>Cart</Link>
            <span className='cart-count'>cart items:{count.length}</span>
        </div>
    </div>
  )
}

export default Navbar