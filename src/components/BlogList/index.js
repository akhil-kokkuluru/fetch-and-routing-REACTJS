import './index.css'
import {Link} from 'react-router-dom'

const BlogList = props => {
  const {blogItem} = props
  const modifiedData = {
    id: blogItem.id,
    title: blogItem.title,
    imageUrl: blogItem.image_url,
    avatarUrl: blogItem.avatar_url,
    author: blogItem.author,
    topic: blogItem.topic,
  }

  return (
    <Link to={`/blogs/${modifiedData.id}`} className="linkContainer">
      <div className="contentBg">
        <img
          alt="titleImage"
          className="titleImage"
          src={modifiedData.imageUrl}
        />
        <p className="topic">{modifiedData.topic}</p>
        <h1 className="titlecss">{modifiedData.title}</h1>
        <div className="profileContainer">
          <img
            alt="profilePic"
            className="avatarCss"
            src={modifiedData.avatarUrl}
          />
          <p className="authorName">{modifiedData.author}</p>
        </div>
      </div>
    </Link>
  )
}
export default BlogList
