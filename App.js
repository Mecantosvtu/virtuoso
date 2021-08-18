import React from 'react'
import Headertop from './Components/Headertop/Headertop'
import Header from './Components/Header/Header'
import Company from './Components/Company/Company'
import Development from './Components/Development/Development'
import Testing from './Components/Testing/Testing'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Slider3 from './Components/Slider3/Slider3'
import Slider4 from './Components/Slider4/Slider4'
import Banner from './Components/Banner/Banner'
import Mission from './Components/Mission/Mission'
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
         <Contact />
        </div>
    )
}

export default App