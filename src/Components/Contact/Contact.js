import React from 'react'
import './Contact.css'
import {Element} from 'react-scroll'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
const Contact = () => {
    return (
        <div className="contact-bg">
            <div className="wrapper">
               <Element className="contact" id="contact">
                   <div class="contactcontainer">
                   <div className="contact-us">
               <div class="phone1">
                    <div class="ph-icon">
                        <FaPhone />
                    </div>
                    <div class="ph-heading">
                       <h1>Phone</h1>
                    </div>
                    <div class="ph-number">
                       <p>+91 78921 94789</p>
                    </div>
                 </div>
                 <div class="mail1">
                    <div class="mail-icon">
                        <FaEnvelope />
                    </div>
                    <div class="mail-heading">
                       <h1>Mail</h1>
                    </div>
                    <div class="mail-address">
                       <p>donotreply@virtuoso.com</p>
                    </div>
                 </div>
                 <div class="location">
                    <div class="loc-icon">
                        <FaLocationArrow />
                    </div>
                    <div class="loc-heading">
                       <h1>Location</h1>
                    </div>
                    <div class="loc-address">
                       <p>042, HRBR Layout 1st Block, HRBR Layout, Horamavu, Bengaluru, Karnataka 560043</p>
                    </div>
                 </div>
                 </div>

                 <div className="contactform">
                 <h1>Reach out to us now for a free consultation session.</h1>
                     <form>
                       
                         <div class="name">
                         <input type="text" class="fname" id="f-name" placeholder="First Name"></input>
                         <input type="text" class="lname" id="l-name" placeholder="Last Name"></input>
                         </div>
                         <div class="mail">
                         <input type="email" class="emailid" id="email" placeholder="Email"></input>
                        
                         </div>
                         <div class="number">
                         <input type="tel" class="number" id="number" placeholder="Ph Number"></input>
                        
                         </div>
                         <div class="summary">
                         <textarea class="summary" id="summary" rows="4" cols="55"placeholder="Summary"></textarea>
                        
                         </div>
                         <button class="formbtn" value="Submit">Submit</button>
                         
                     </form>
                 </div>
                 </div>
                
               </Element>

                </div><div className="clear"></div>
            </div>
            
       
    )
}

export default Contact
