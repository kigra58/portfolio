import React from 'react'
import "../css/Navbar.css";
import ThemeChanger from './ThemeChanger';
// import { NavLink } from 'react-router-dom';
// import { ROUTES } from '../utils/constant';
const Navbar:React.FC = () => {
  


  return (
    <>
       <nav className="navbar light">
        <div className="logo">
            {/* <a href="#">Brand</a> */}
        </div>
        <div className="menu">
            {/* <NavLink to={ROUTES.HOME}></NavLink> */}
            {/* <NavLink to={ROUTES.REGISTER_PORTFOLIO}> New Portfolio </NavLink>
            <NavLink to="#">About</NavLink>
            <NavLink to="#">Services</NavLink>
            <NavLink to={ROUTES.CONTACT} >Contact</NavLink> */}
        </div>
        <ThemeChanger/>
    </nav>
    </>
  )
}

export default Navbar