import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPosts} from '../Redux/actions'
import './Stylesheet.css' 


class AddPost extends Component{

    state = {
        content: "",
        img_url: "",
        wall_id: null
    }

    componentDidMount(){
        this.setState({wall_id: this.props.user.id})
        console.log("props in AddPost.js", this.props)
        // this.setState({wall_id: this.props.user.user.wall.id})
    }   

    newPostHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    localAddPost = (e) => {
        e.preventDefault()
        this.props.createPosts(this.state)
        this.setState({content:"", img_url:""})
        this.props.rerender()
    }

    render(){
        console.log("current props in addPost component",this.props)
        return(
            <>
            <h1> Share with your friends</h1>
            <form onSubmit={this.localAddPost}>
                <input type="text" name="content"placeholder="Content" value={this.state.content} onChange={this.newPostHandler}/>
                <input type="text" name="img_url"placeholder="Image" value={this.state.img_url} onChange={this.newPostHandler}/>
                <input type="text" name="Wall"placeholder="Wall" value={this.state.wall_id} onChange={this.state.wall_id}/>
                <button class="button">POST! <div class="button__horizontal"></div><div class="button__vertical"></div></button>
                
              
            
            </form>
            </>
        )
    }
}

function msp(state){
    console.log("wallll",state)
    
    return{
        user: state.user
    }

}

function mdp(dispatch){
    return{
        createPosts: (newPostObject) => dispatch(addPosts(newPostObject))
    
    }
    
}

export default connect(msp, mdp)(AddPost)


// {
//     "id": 1,
//     "content": "wasuupppppp",
//     "img_url": null,
//     "user": {
//       "id": 1,
//       "username": "steven420",
//       "password": "123456",
//       "vaccinated": null,
//       "img_url": null,
//       "first_name": "Steven",
//       "last_name": "Wu",
//       "age": 29,
//       "hometown": "Flushing"
//     }

{/* <button class="button">
	Button
	<div class="button__horizontal"></div>
	<div class="button__vertical"></div>
</button> */}