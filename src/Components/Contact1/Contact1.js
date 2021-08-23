import React from 'react'
import './Contact1.css'
import {  } from "react-bootstrap";
import {Element} from 'react-scroll'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
const Contact1 = () => {
    return (
                    <div className="contact-bg">
            <div className="wrapper">
            <div className="clear"></div>
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
                 <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control" id="validationTooltip01" Placeholder="First name" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <input type="text" class="form-control" id="validationTooltip02" placeholder="Middle Name"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control" id="validationTooltip01" Placeholder="Last name" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">

    <input type="tel" class="form-control" id="validationTooltip02" placeholder="Mobile"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">

    <input type="email" class="form-control" id="validationTooltip02" placeholder="Email Id" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">
   
    <input type="text" class="form-control" id="validationTooltip03" placeholder="City" required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control" id="validationTooltip02" placeholder="State"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-3 position-relative">
 
    <input type="text" class="form-control" placeholder="Zip" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
                 </div>
                 </div>
                
               </Element>
               <div className="clear"></div>
                </div>
            </div>
            
    
    )
}

export default Contact1
