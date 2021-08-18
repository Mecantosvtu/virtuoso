import React from 'react'
import {Element} from 'react-scroll'
import './About.css'

const About = () => {
    return (
        <Element className="about" id="about">
            <div className="wrapper">
                <div className="aboutus">
           <div className="about-heading">
               <h1>Who we are ?</h1>
           </div>
           <div className="about-content">
               <p>Virtuoso is one of renowned companies known for its custom software development across various industries. We help startups, SMBs, and enterprises to navigate through complex issues with the help of advanced tech solutions.
               We have worked on 100+ projects to develop web applications,  mobile applications, data platforms, software, automation and integration solutions.
               </p>
               <p>We believe in customizing each project based on special feature requirements and market conditions.Regardless of the size of the project, our expert developers will be there to guide you through your needs.</p>
               <p>We are a team of professional software developers building cross platform applications using latest cutting edge technologies which are in huge demand. We understand that every company's needs are different, which is why we'll carefully craft a one-of-a-kind service or product. Whether you need show stopping web design, web applications, captivating      virtual tours, mobile applications, SEO enhancement - you name it- we have got you covered.</p>
           </div>
           </div>
           </div>

        </Element>
    )
}

export default About
