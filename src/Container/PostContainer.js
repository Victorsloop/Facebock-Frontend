import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'

class PostContainer extends Component {

    state ={
        filterPost: "",
        postArray : [],
        beenClicked:false
    }

    componentDidMount(){
        this.props.getPosts()
        }

    filterHandler = (e) => {
        this.setState({filterPost: e.target.value})
    }

    renderPostForm = () => {
        if(this.state.beenClicked){
            return (< AddPost/>)
        }
    }

    postClickHandler = () => {
        this.setState((prevState) => ({beenClicked: !prevState.beenClicked}))
    }


    render() {
        console.log("post container props",this.props)
        return (


            <>
                {this.props.user ? 
                <>
                
                < FilterPost filter={this.state.filterPost} filterHandler={this.filterHandler}/>
                <button onClick={this.postClickHandler}>{this.state.beenClicked? "Dont feel like Posting": "Show The World"}</button>
                {this.renderPostForm()}
                <Post user={this.props.user} />

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
    return{
        getPosts: () => dispatch(fetchPosts())
        // createPost: (newPostObject) => dispatch(addPost(newPostObject))
    
    }
    
}

export default connect(msp,mdp)(PostContainer)



