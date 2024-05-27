import './box.css';
import React from 'react'

function Box({name, title, image}) {
  return (
    <div className="box">
        <div className="box__info">
            <div className="box__info-person">
            <h3>{name}</h3>
            <p>{title}</p>
            </div>
            <div className="box__info-stars">
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium suscipit, exercitationem quia et iste doloribus earum quo nam sapiente facere corpori</p>
        </div>
        <div className="box__image"><img src={image} alt=""/></div>                   
    </div>
  )
}

export default Box;
