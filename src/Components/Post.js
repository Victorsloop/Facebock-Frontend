import React, {Component} from 'react'
 import {connect} from 'react-redux'


class Post extends Component{
    render(){
        // const post = this.props.postObj
        return(
            <>
            {/* <h2>Post content:{post.content}</h2>
            <h2>Post user:{post.user}</h2>
            <img alt={post.name} src={post.img_url}></img> */}
            POST Component
            </>

        )
    }

}

const msp = (state) => {
    console.log("current state", state)
    return { user: state.user}
    
}

export default connect(msp,null)(Post)