import './feature.css'
function Feature({title, text}) {
  return (
    <div className='features__container-feature'>
      <div className='features__container-feature__heading'>
      <div/>
      <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Feature
