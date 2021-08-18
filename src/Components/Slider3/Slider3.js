import React from 'react'
import './Slider3.css'
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


function Slider3(){
    let settings = {
           dot:true,
           infinite:true,
           speed:500,
           slidesToShow:3,
           slidesToScroll:1,
           cssEase: "linear"
    }
    return (
        <div>
        <div className="clear"></div>
        <div className="corouselpage">
        <div className="wrapper">
            
            <div class="corousel-content">
                   <h1>Technology We Use</h1>
                   <p>It has become appallingly obvious that our technology has exceeded our human</p>
            </div>
            <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                <div className="card-image">
                    <img src={sql} alt="sql" />
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                <div className="card-image">
                    <img src={java} alt="java" />
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                <div className="card-image">
                    <img src={mongo} alt="mongo" />
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                <div className="card-image">
                    <img src={soapui} alt="soapui" />
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                <div className="card-image">
                    <img src={node} alt="node" />
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                <div className="card-image">
                    <img src={react} alt="react" />
                </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
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

export default Slider3

