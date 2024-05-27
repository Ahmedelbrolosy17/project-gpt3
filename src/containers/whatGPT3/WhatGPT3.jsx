import Feature from '../../components/feature/Feature';
import './whatGPT3.css'
function WhatGPT3() {
  const featureInfo = [
    {title:"Chatbots", text:"We so opinion friends me message as delight. Whole front do of plate heard oh ought."},
    {title:"Knowledgebase", text:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"},
    {title:"Education", text:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}
  ]
  return (
    <div className='whatgpt3 section__margin' id='whatgpt'>
      <div className='whatgpt3__featureOne'>
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='whatgpt3__heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='whatgpt3__feature-container'>
        {featureInfo.map((ele, index)=>{
          return <Feature key={ele.title + index} title={ele.title} text={ele.text}/>
        })}
      </div>
    </div>
  )
}

export default WhatGPT3;
