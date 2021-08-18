import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
const Header = () => {
    return (
        <div class="wrapper">
        <div className="header">
            <div className="header-left">
                <h1>VIRTUOSO</h1>
            </div>
            <div className="header-right">
               <Link to="about" smooth={true} duration={500}><h4>ABOUT</h4></Link>
               <Link to="projects" smooth={true} duration={500}><h4>PROJECTS</h4></Link>
               <Link to="services" smooth={true} duration={500}><h4>SERVICES</h4></Link>
               <Link to="careers" smooth={true} duration={500}><h4>CAREERS</h4></Link>
               <Link to="contact" smooth={true} duration={500}><h4>CONTACT</h4></Link>

            </div>
        </div>
        </div>
    )
}

export default Header

