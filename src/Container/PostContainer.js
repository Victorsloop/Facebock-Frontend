import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'

class PostContainer extends Component {

    filterHandler = (e) => {
        this.setState({filterMovie: e.target.value})
    }
    render() {
        return (
            <div>
                PostContainer
                < FilterPost filter={this.state.filterPost} filterHandler={this.filterHandler}/>
            </div>
        )
    }
}

export default PostContainer
