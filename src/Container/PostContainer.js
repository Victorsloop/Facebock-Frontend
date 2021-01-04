import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'

class PostContainer extends Component {

    state ={
        filterPost: "",
        postArray : []
    }

    componentDidMount(){
        this.props.getPosts()
        }

    filterHandler = (e) => {
        this.setState({filterMovie: e.target.value})
    }
    render() {
        console.log("post container props",this.props)
        return (


            <>
                {this.props.user ? 
                <>
                PostContainer
                < FilterPost filter={this.state.filterPost} filterHandler={this.filterHandler}/>

                </>
                :
                <>
                <h1>not logged in</h1>

                </>        
                }
            </>
        )
    }
}

const msp = (state) => {
    console.log("current state", state)
    return { user: state.user}
    


}

function mdp(dispatch){
    return{getPosts: () => dispatch(fetchPosts()) }
    
}

export default connect(msp,mdp)(PostContainer)
