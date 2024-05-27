import './contact.css'
import React from 'react'
import offer from '../../assets/offer.png'
import {Navbar} from '../../components';
import {Footer} from '../../containers'
function Contact() {
  return (
    <>
        <Navbar/>
        <div className='contact section__padding'>
        <div className="contact__discount" id="discount">
            <div className="contact__discount-Description">
                <div className="contact__discount-Description__text">
                    <h2 className='gradient__text'>we have a discount</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ullam neque sed eum, deleniti minus, earum voluptatem quis voluptate ad officiis rerum temporibus provident error vel expedita qui nisi odio.</p>
                </div>
                <div className="contact__discount-Description__image"><img src={offer} alt="offer"/></div>
            </div>
            <div className="contact__request">
                <div className="contact__request-form">
                    <h2 className='gradient__text'>request a discount </h2>
                   <form action="">
                        <input type="text" className="contact__request-form-input" placeholder="your name"/>
                        <input type="email" className="contact__request-form-input" placeholder="your email"/>
                        <input type="text" className="contact__request-form-input" placeholder="your phone"/>
                        <textarea name="" className="contact__request-form-input" id="" cols="30" rows="10" placeholder="tell us about your needs"></textarea>
                        <input type="submit" value="send"/>
                   </form>
                </div>
            </div>
        </div>
        <div className="contact__thought">
            <h2 className='gradient__text'> feel free to tell us your thoughts</h2>
            <form action="">
                <input type="text" placeholder='your email'/>
                <textarea placeholder='tell us your thoughts' cols={15} rows={10}></textarea>
            </form>
            <button className='hover-effect'>send</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact;
