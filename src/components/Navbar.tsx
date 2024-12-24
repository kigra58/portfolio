import React from 'react'
import "../css/Navbar.css";
import ThemeChanger from './ThemeChanger';
const Navbar:React.FC = () => {
  


  return (
    <>
       <nav className="navbar light">
        <div className="logo">
            {/* <a href="#">Brand</a> */}
        </div>
        <div className="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </div>
        <ThemeChanger/>
    </nav>
    </>
  )
}

export default Navbar