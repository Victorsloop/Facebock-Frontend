import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'

class PostContainer extends Component {

    componentDidMount(){
        this.props.getPosts()
        }

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
function msp(){
    return{}
}

function mdp(dispatch){
    return{getPosts: () => dispatch(fetchPosts()) }
    
}

export default connect(msp,mdp)(PostContainer)
