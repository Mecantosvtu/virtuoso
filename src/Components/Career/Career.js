import React from 'react'
import './Career.css'
import { Element } from 'react-scroll'
const Career = () => {
    return (
        <div className="career-page-background">
        <div className="wrapper">
            <div class="career-page">
             <div className="career-form-heading">
                <h1>Career in Virtuoso</h1>
            </div>

            <Element className="career" id="careers">
            <div className="career-form">
            <div className="career-form-content">
            <form class="row g-3 needs-validation" novalidate>
                <h1>Apply Here</h1>
               <label>Upload CV <br/></label> <input type="file"></input>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control1" id="validationTooltip01" Placeholder="First name" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <input type="text" class="form-control1" id="validationTooltip02" placeholder="Middle Name"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control1" id="validationTooltip01" Placeholder="Last name" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">

    <input type="tel" class="form-control1" id="validationTooltip02" placeholder="Mobile"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">

    <input type="email" class="form-control1" id="validationTooltip02" placeholder="Email Id" required/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>

  <div class="col-md-4 position-relative">
   
   <input type="text" class="form-control1" id="validationTooltip03" placeholder="Country" required/>
   <div class="invalid-tooltip">
     Please provide a valid city.
   </div>
 </div>

  <div class="col-md-4 position-relative">
   
    <input type="text" class="form-control1" id="validationTooltip03" placeholder="City" required/>
    <div class="invalid-tooltip">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-4 position-relative">

    <input type="text" class="form-control1" id="validationTooltip02" placeholder="State"/>
    <div class="valid-tooltip">
      Looks good!
    </div>
  </div>
  
   <div class="col-md-3 position-relative">
 
 <input type="text" class="form-control1" placeholder="Zip" id="validationTooltip05" required/>
 <div class="invalid-tooltip">
   Please provide a valid zip.
 </div>
</div>






<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Graduation (eg : BE/B.Tech)"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Percentage/CGPA"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Year of Passing"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>





<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="HSC"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Percentage/CGPA"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Year of Passing"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>







<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="SSLC"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Percentage/CGPA"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>


<div class="col-md-4 position-relative">

<input type="text" class="form-control1" id="validationTooltip02" placeholder="Year of Passing"/>
<div class="valid-tooltip">
  Looks good!
</div>
</div>



<label>Upload Recent Passport  size photo <br/></label> <input type="file"></input>







  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
            </div>
            </div></Element>
        </div></div></div>
    )
}

export default Career
