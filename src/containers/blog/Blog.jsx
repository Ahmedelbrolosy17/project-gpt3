import Article from '../../components/article/Article';
import './blog.css'
import { blog1, blog2, blog3, blog4, blog5} from './import';
function Blog() {
  return (
    <div className='blog section__padding' id='blog'>
      <div className="blog__heading">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="blog__container">
        <div className="blog__container-sectionA">
          <Article urlImage={blog1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="blog__container-sectionB">
          <Article urlImage={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article urlImage={blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article urlImage={blog4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article urlImage={blog5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;