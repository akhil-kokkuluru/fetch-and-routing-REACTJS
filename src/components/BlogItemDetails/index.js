import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: [], isLoading: true}

  componentDidMount() {
    this.gettingBlogDetails()
  }

  gettingBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const modifiedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogDetails: modifiedData, isLoading: false})
  }

  contentRendering = () => {
    const {blogDetails} = this.state

    const {title, author, content, imageUrl, avatarUrl} = blogDetails
    return (
      <div className="blogContainer">
        <h1 className="btitlecss">{title}</h1>
        <div className="picNamecss">
          <img alt="profile" className="profilePic" src={avatarUrl} />
          <p className="authorNamecss">{author}</p>
        </div>
        <img alt={title} src={imageUrl} className="blogImageCss" />
        <p className="textdiscription">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.contentRendering()
        )}
      </>
    )
  }
}
export default BlogItemDetails
