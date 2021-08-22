import React , {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
import './Header.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Header = () => {
    const [icon, setIcon]= useState(false)
    const handleClick =()=>{
        setIcon(!icon)
    }
    const closeNav=()=>{
        setIcon(false)
    }
    return (
  
        <div class="wrapper">
        <div className="header">
            <div className="header-left">
                <h1>VIRTUOSO</h1>
            </div>
            <div className="header-right">
               <nav className="navbar">
                   <div className="menu-icon" onClick={handleClick}>
                       {
                           icon ? <FaTimes className="fa-times"></FaTimes> : <FaBars className="fa-bars"></FaBars>
                       }
                   </div>
                   <ul className={
                       icon ? "nav-menu active" : 'nav-menu'
                   }>
               <li><Link to="about" className="nav-links" onClick={closeNav} smooth={true} duration={500}>ABOUT</Link></li>
               <li><Link to="projects" className="nav-links" onClick={closeNav} smooth={true} duration={500}>PROJECTS</Link></li>
               <li><Link to="services" className="nav-links" onClick={closeNav} smooth={true} duration={500}>SERVICES</Link></li>
               <li><Link to="careers" className="nav-links" onClick={closeNav} smooth={true} duration={500}>CAREERS</Link></li>
               <li><Link to="contact" className="nav-links" onClick={closeNav} smooth={true} duration={500}>CONTACT</Link></li>
               </ul>
               </nav>
            </div>
        </div>
        <div className="clear"></div>
        </div>
    )
}

export default Header

