import React, { Component } from 'react'
import FilterPost from '../Components/FilterPost'
import {connect} from 'react-redux'
import { fetchPosts } from '../Redux/actions'
import AddPost from '../Components/AddPost'
import Post from '../Components/Post'

class Wall extends Component {

    state ={
        filterPost: "",
        postArray : [],
        beenClicked:false,
        user:null,
        newPostArray : []

    }

    // componentDidMount(){
    //     console.log("HITTING THIS WALL")
    //     this.props.getPosts()
    //     }


    componentDidMount(){
        fetch("http://localhost:5000/api/v1/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            
            const filteredPosts = []
            arrayOfPost.forEach( post=>{
                if(post.user.id === this.props.user.id){
                    
                    filteredPosts.push(post)
                }
            })    

            // this.setState({newPostArray:filteredPost})
            // dispatch({type: FETCH_POSTS, payload : filteredPosts})
            console.log("IN WALL DIDMOUNT SHOWING filteredPosts",filteredPosts)
            this.props.getPosts(filteredPosts)
            
        })
        .catch(console.log)
    }

    // componentDidUpdate( prevState) {
    //     if (prevState.newPostArray !== this.state.newPostArray) {
    //       console.log('array up2DATE')
    //     //   this.componentDidMount()
    //     }
    //   }

    // filterHandler = (e) => {
    //     this.setState({filterPost: e.target.value})
    // }

    renderPostForm = () => {
        if(this.state.beenClicked){
            return (< AddPost rerender={this.newRenderPosts} />)
        }
    }

    postClickHandler = () => {
        this.setState((prevState) => ({beenClicked: !prevState.beenClicked}))
    }

    // renderPosts = () => {
        
        
            
        // fetch("http://localhost:5000/api/v1/posts")
        // .then(r => r.json())
        // .then (arrayOfPost => {
        //     console.log("FETCHING POSTS", arrayOfPost)
        //     this.setState( {
        //         postArray: arrayOfPost
        //     })
        // })
        // .catch(console.log)
            
        
    //     console.log("render posts", this.props.postArray)

    //     return this.props.postArray.map(post => <Post key={post.id} postObj={post} user={this.props.user}/>)
    // }
    
    newRenderPosts = () => {
        // console.log("newrenderpost this.props.user", this.props.user)
        console.log("newrenderpost this.props.postarray", this.props.postArray)
        // return this.props.postArray.map(post => <Post key={post.id} postObj={post} user={post.user.username}/>)
        // return this.props.postArray.map(post => <Post key={post.id} postObj={post} content={post.content}/>)
        return this.props.postArray.map(post => <Post className="post-css" key={post.id} postObj={post} username={post.user.username}/>)
        
        
        // return this.props.newPostArray.map(post => <Post key={post.id} postObj={post} username={post.user.username}/>)

    }


    render() {
        console.log("wall.js props",this.props)
        return (


            <>
                { localStorage.token ?

                <>
                
                {/* < FilterPost  /> */}
                <button onClick={this.postClickHandler}>{this.state.beenClicked? "Dont feel like Posting": "Show The World"}</button>
                 {this.renderPostForm()}
                {this.newRenderPosts()}
                {/* {this.renderPosts()} */}
                
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

    console.log("current state in msp in wall.js", state.user)
    return { user: state.user, postArray: state.posts}
    // return { user: state.user, postArray: state.user.posts}
    


}

function mdp(dispatch){
    return{
        getPosts: (filteredPosts) => dispatch(fetchPosts(filteredPosts))

        // createPost: (newPostObject) => dispatch(addPost(newPostObject))
    
    }
    
}



export default connect(msp,mdp)(Wall) 



