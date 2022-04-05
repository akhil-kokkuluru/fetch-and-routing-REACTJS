import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

class Home extends Component {
  state = {blogsList: [], isloading: true}

  componentDidMount() {
    this.blogComponents()
  }

  blogComponents = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    this.setState({blogsList: data, isloading: false})
  }

  render() {
    const {blogsList, isloading} = this.state

    return (
      <div className="home-container">
        <UserInfo />
        <div className="blogsContainer">
          {isloading ? (
            <div testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogsList.map(item => <BlogList blogItem={item} key={item.id} />)
          )}
        </div>
      </div>
    )
  }
}
// const Home = async () => {

//   )
// }
export default Home
