import React from 'react'
import './Company.css'
import {FaMoneyBill, FaProcedures} from 'react-icons/fa'
const Company = () => {
    return (
        <div className="wrapper">
            <div className="fin">
            <div className="finance1">
            <div class="fin-icon"><FaMoneyBill/></div>
                 <h2>Financial Cost</h2>
                 <p>We understand that one of the biggest concerns for tech companies is the expensive cost. That’s why we offer competitive rates that come within your budget.</p>
            </div>
            <div className="finance2">
            <div class="fin-icon"><FaProcedures/></div>
                 <h2>Our Specilizations</h2>
                 <p>We specialize in building SaaS products, critical multisystem solutions and innovative data platforms.</p>
            </div></div><div className="clear"></div>
            <div className="fin1">
            <div className="finance3">
                 <div class="fin-icon"><FaProcedures/></div>
                 <h2>Technology We Use</h2>
                 <p>Our team is proficient in SQL, Microsoft Azure, React JS, Node JS, Restful, SOAP, Java, Dynamics 365, Mongodb and many other technologies, databases, and web services.</p>
            </div>
            <div className="finance4">
            <div class="fin-icon"><FaProcedures/></div>
                 <h2>Our Specilizations</h2>
                 <p>We specialize in building SaaS products, critical multisystem solutions and innovative data platforms.</p>
            </div>
            </div><div className="clear"></div>
        </div>
    )
}

export default Company
