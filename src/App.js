import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headertop from './Components/Headertop/Headertop'
import Header from './Components/Header/Header'
import Slider1 from './Components/Slider1/Slider1'
import Company from './Components/Company/Company'
import Development from './Components/Development/Development'
import Testing from './Components/Testing/Testing'
import About from './Components/About/About'
import Contact1 from './Components/Contact1/Contact1'
import Slider3 from './Components/Slider3/Slider3'
import Slider4 from './Components/Slider4/Slider4'
import Banner from './Components/Banner/Banner'
import Mission from './Components/Mission/Mission'
import Career from './Components/Career/Career'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
export const App = () => {
    return (
        <div>
             <Headertop />
             <Header />
             <Banner />
             <Company />
             <Development />
             <Slider3 />
             <Testing />
             <Slider4 />
             <About />
             <Mission />
             <Projects />
             <Contact1 />
             <Career />
             <Footer />
             
        </div>
    )
}

export default App