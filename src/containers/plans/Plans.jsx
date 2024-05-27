import Plan from '../../components/plan/Plan';
import './plans.css';
import React from 'react'

function Plans() {
  return (
    <div className="pricing section__padding" id="pricing">
        <h2 className="intro">pricing plans</h2>
        <div className="pricing__container">
            <Plan title="basic" price="15" apis="50" videoMins="200" />
            <Plan title="prime" price="25" apis="100" videoMins="500" />
            <Plan title="ultimate" price="50" apis="200" videoMins="1000" />
        </div>
    </div>
  )
}

export default Plans
