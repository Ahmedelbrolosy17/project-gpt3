import './brand.css'
import { google, dropBox, atlassian, shopify, slack } from './import';
function Brand() {
  return (
    <div className='brand section__padding'>
      <ul className='brand__container'>
        <li><img src={google} alt="google"/></li>
        <li><img src={slack} alt="slack"/></li>
        <li><img src={atlassian} alt="atlassian"/></li>
        <li><img src={dropBox} alt="dropBox"/></li>
        <li><img src={shopify} alt="shopify"/></li>
      </ul>
    </div>
  )
}

export default Brand;