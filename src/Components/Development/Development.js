import React from 'react'
import './Development.css'
import image from './develop.jpg'
const Development = () => {
    return (
        <div className="wrapper">
            <div class="development">
            <div className="develop-image">
                 <img src={image}></img>
            </div>
            <div class="develop-content">
                <h1>Development</h1>
                <p>Our web development team looks beyond the visual effect of the website and takes other factors into consideration such as the user-friendliness of the website, ease of maintenance and adhering to the best practices and website development standards. We also take into account the search engine friendliness and optimization of the website and of course, we make sure that the website serves and meets its main objectives. </p>
            </div>
            </div>
            <div className="clear"></div>
        </div>
    )
}

export default Development
