import React from 'react'
import './Testing.css'
import image from './test.jpg'
const Testing = () => {
    return (
        <div className="wrapper">
            <div class="testing">
             <div class="test-content">
                <h1>Testing</h1>
                <p>Our web development team looks beyond the visual effect of the website and takes other factors into consideration such as the user-friendliness of the website, ease of maintenance and adhering to the best practices and website development standards. We also take into account the search engine friendliness and optimization of the website and of course, we make sure that the website serves and meets its main objectives. </p>
            </div>
            
            <div className="test-image">
                 <img src={image}></img>
            </div>
           
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default Testing
