import './overview.css'
import React from 'react'
import {Footer} from '../../containers'
import {Navbar} from '../../components';
import {pic1, pic2, pic3, pic4, pic5, pic6} from './import'
import Box from '../../components/box/Box';

function Overview() {
  const reviews = [
    {name:"ahmed ali", title:"front-end", pic: pic1 },
    {name:"mohamed radi", title:"flutter", pic: pic2 },
    {name:"israa gamil", title:"back-end", pic: pic3 },
    {name:"gamil reda", title:"UI/UX", pic: pic4 },
    {name:"ali morad", title:"back-end", pic: pic5 },
    {name:"israa wael", title:"front-end", pic: pic6 } 
  ]
  return (
    <>
      <Navbar/>
      <div className='overview section__padding'>
        <div className="overview__stats gradient__bg" id="stats">
          <h2>our awesome stats</h2>
          <div className="overview__stats-container">
              <div className="overview__stats-container__box">
                  <i className="far fa-user fa-2x fa-fw"></i>
                  <span>150</span>
                  <span>clients</span>
              </div>
              <div className="overview__stats-container__box">
                  <i className="fas fa-code fa-2x fa-fw"></i>
                  <span>135</span>
                  <span>projects</span>
              </div>
              <div className="overview__stats-container__box">
                  <i className="fas fa-globe-asia fa-2x fa-fw"></i>
                  <span>50</span>
                  <span>countries</span>
              </div>
              <div className="overview__stats-container__box">
                  <i className="far fa-money-bill-alt fa-2x fa-fw"></i>
                  <span>500k</span>
                  <span>money</span>
              </div>
          </div>
        </div>
        <div className="overview__testimonials" id="testimonials">
        <div className="overview__testimonials-container">
            <h2 className="intro">reviews</h2>
            <div className="overview__testimonials-container__content">
               {reviews.map((ele, index)=>(
                <Box key={ele.title + index} name={ele.name} title={ele.title} image={ele.pic}/>
               ))}
            </div>
        </div>
    </div>
      </div>
      <Footer/>
    </>
  )
}

export default Overview
