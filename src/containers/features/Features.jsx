import './features.css'
import Feature from "../../components/feature/Feature"
function Features() {
  const featuresData = [
    {title:"Improving end distrusts instantly", text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."},
    {title:"Become the tended active", text:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."},
    {title:"Message or am nothing", text:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."},
    {title:"Really boy law county", text:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."}
  ]
  return (
    <div className='features section__padding'>
      <div className='features__heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features__container">
        {
          featuresData.map((ele, index)=>(
            <Feature key={ele.title + index} title={ele.title} text={ele.text}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features;
