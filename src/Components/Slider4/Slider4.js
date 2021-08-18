import React from 'react'
import './Slider4.css'
import Slider from 'react-slick'
import sql from './images/sql.png'
import java from './images/java.png'
import mongo from './images/MongoDB.png'
import soapui from './images/soapui.png'
import node from './images/node.png'
import react from './images/react1.png'
import micro from './images/micro.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Slider4(){
    let settings = {
        dot:true,
        infinite:true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        cssEase: "linear"
 }
    return (
        <div>
        <div className="clear"></div>
        <div className="corouselpage">
        <div className="wrapper">
            
          <div className="clear"></div>
          <div class="corousel-cont">
                   <h1>Our Clients...</h1>
                 
            </div>
            <Slider {...settings}>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={sql} alt="sql" />
                </div>
                </div>
            </div>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={java} alt="java" />
                </div>
                </div>
            </div>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={mongo} alt="mongo" />
                </div>
                </div>
            </div>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={soapui} alt="soapui" />
                </div>
                </div>
            </div>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={node} alt="node" />
                </div>
                </div>
            </div>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={react} alt="react" />
                </div>
                </div>
            </div>
            <div className="card-wrapper1">
                <div className="card1">
                <div className="card-image">
                    <img src={micro} alt="micro" />
                </div>
                </div>
            </div>
        </Slider>
     
        </div>
        </div>
        <div className="clear"></div>
        </div>
    )
}

export default Slider4
