import React from 'react'
import image from './extend.png'
import './Extend.css'
const Extend = () => {
    return (
        <div>
            <div className="wrapper">
            <div className="image">
                <img src={image}></img>
            </div>
            <div class="extend-content">
            <div className="extend-heading">
                <h1><span>Extended Team</span></h1>
            </div>
            <div class="extend-content1">
                <p>Get your team customized by your requirements Development or Testing? Doesn't Matter..</p>
            </div>
            <div class="extend-content2">
                <p>Our clients have experienced greater flexibility, increased ROI and faster time to market by leveraging the ThiDiff Global Extended Teams. Yes. We have proven that.</p>
            </div>
            <button className="extend-content-button">Get Started</button>
           
            </div>
            </div>
        </div>
    )
}

export default Extend
