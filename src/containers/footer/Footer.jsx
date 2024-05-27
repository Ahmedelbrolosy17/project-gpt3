import './footer.css'
import footerLogo from '../../assets/GPT-3.svg'
function Footer() {
  return (
    <>
    <div className='footer section__padding'>
      <div className="footer__heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button type='button'>Request Early Access</button>
      </div>
      <div className="footer__links">
        <div className="footer__links-logo">
          <img src={footerLogo} alt="logo"/>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <ul className="footer__links-link">
          <li><h4>Links</h4></li>
          <li><a href="##">Overons</a></li>
          <li><a href="##">Social Media</a></li>
          <li><a href="##">Counters</a></li>
          <li><a href="##">Contact</a></li>
        </ul>
        <ul className="footer__links-company">
          <li><h4>Company</h4></li>
          <li><a href="##">Terms & Conditions</a></li>
          <li><a href="##">Privacy Policy</a></li>
          <li><a href="##">Contact</a></li>
        </ul>
        <ul className="footer__links-touch">
          <li><h4>Get in touch</h4></li>
          <li><p>Crechterwoord K12 182 DK Alknjkcb</p></li>
          <li><p>085-132567</p></li>
          <li><p>info@payme.net</p></li>
        </ul>
      </div>
    </div>
      <div className="footer__copyright">
        <p>© 2024, made by ahmed elbrolosy.</p>
      </div>
      </>
  )
}

export default Footer;
