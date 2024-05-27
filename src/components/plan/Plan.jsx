import React from 'react'
import './plan.css'

function Plan({title, price, apis, videoMins}) {
  return (
    <div className="pricing__container-plan">
                <div className="pricing__container-plan__type">
                    <h2>{title}</h2>
                    <i className="fa-solid fa-server"></i>
                    <span>{price}$</span>
                    <span>per month</span>
                </div>
                <ul>
                <li>10GB HDD Space</li>
                <li>{apis} apis</li>
                <li>{videoMins} mins video generation</li>
                <li>4 Databases</li>
                <li>Basic Support</li>
                </ul>
                <a href="#" className="choose">choose plan</a>
            </div>
  )
}

export default Plan
