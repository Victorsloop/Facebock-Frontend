import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
// import Post from '../Components/Post'

class PostContainer extends Component {

    state ={
        filterPost: "",
        postArray : [],
        beenClicked:false,
        user:null

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

    renderPosts = () => {
        
        
            
        fetch("http://localhost:5000/api/v1/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            console.log("FETCHING POSTS", arrayOfPost)
            this.setState( {
                postArray: arrayOfPost
            })
        })
        .catch(console.log)
            
        
        console.log("render posts", this.props)
        // return this.state.postArray.map(post => <Post key={post.id} postObj={post}/>)
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
                {this.renderPosts()}
                </>
                :
                <>
                <h1>not logged in</h1>

                </>        
                }
            </>
            
            // <>
            
            // {this.props.user.posts.forEach(post => { <Post content={post.content } /> } )}
            // </>

        )
    }
}

function msp(state){

    console.log("current state", state)
    return { user: state.user, postArray: state.user.posts}
    


}

function mdp(dispatch){
    return{
        getPosts: () => dispatch(fetchPosts())
        // createPost: (newPostObject) => dispatch(addPost(newPostObject))
    
    }
    
}



export default connect(msp,mdp)(PostContainer)



