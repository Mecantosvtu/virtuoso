import React from 'react'
import './Project.css'
import { Element } from 'react-scroll'
import easy from './easy.png'
import twint from './twinternal.png'
import benling from './benling.png'
const Projects = () => {
    return (
        <div className="wrapper">
            <div class="clear"></div>
            <div className="project-page">
                <Element id="projects">
                <div className="project-title">
                    <h1>Our Projects</h1>
                    <p>We have worked on 100+ projects to develop web applications,  mobile applications, data platforms, software, automation and integration solutions.</p>
                </div>
                <div className="projects">
                    <img src={easy}/>
                    <img src={twint}/>
                    <img src={benling}/>
                </div>
                <button className="project-btn">More</button>

            </Element>
            </div>  <div class="clear"></div>
        </div>
    )
}

export default Projects
