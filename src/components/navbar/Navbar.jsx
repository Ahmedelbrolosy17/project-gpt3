import './navbar.css'
import logo from '../../assets/GPT-3.svg'
import { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
  let location = useLocation();
  const MenuItems = () => {
    return(
      <>
          <p><Link to="/">home</Link></p>
          {!(location.pathname === "/contact" || location.pathname === "/overview") && (
            <>
              <p><a href="#whatgpt">what is GPT?</a></p>
              <p><a href="#possibility">open AI</a></p>
              <p><a href="#blog">case studies</a></p>
            </>
          )}
          <p><Link to='/overview' >overview</Link></p>
          <p><Link to='/contact' >contact</Link></p>
      </>
    )
  }
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links-logo'>
          <Link to="/"><img src={logo} alt="GPT3"/></Link>
        </div>
        <div className='navbar__links-container'>
          <MenuItems/>
        </div>
      </div>
      <div className='navbar__sign'>
        <p>sign in</p>
        <button className='hover-effect' type='button'>sign up</button>
      </div>
      <div className='navbar__menu'>
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=>{
          setToggleMenu(false)
        }}/> : <RiMenu3Line color='#fff' size={27} onClick={()=>{
          setToggleMenu(true)
        }}/>}
        {toggleMenu && (
        <div className='navbar__menu-container slide-bottom'>
          <div className='navbar__menu-container__links'>
            <MenuItems/>
          </div>
          <div className='navbar__menu-container__sign'>
            <p>sign in</p>
            <button className='hover-effect' type='button'>sign up</button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
