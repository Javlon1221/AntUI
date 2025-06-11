import React from 'react'
import CustomButton from '../../buttons/CustomButton';
import './header.css'


const Header = () => {
  return (
    <>
    <div className='header'>
      <div className="container">
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <ul className="navbar_ul">
                <li><a href="#" className="navbar_link">Home</a></li>
                <li><a href="#" className="navbar_link">About</a></li>
                <li><a href="#" className="navbar_link">Contact</a></li>
            </ul>
            <CustomButton/>
        </nav>
      </div>
    </div> 
    </>
  )
}

export default Header
