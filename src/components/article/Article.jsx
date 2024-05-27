import './article.css'
function Article({urlImage, date, title}) {
  return (
    <div className='article'>
      <div className="article__image">
        <img src={urlImage} alt="blog" />
      </div>
      <div className="article__content">
        <div className="article__content-heading">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>read full article</p>
      </div>
    </div>
  )
}

export default Article
