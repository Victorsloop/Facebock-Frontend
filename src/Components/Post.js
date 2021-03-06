import React, {Component} from 'react'
 import {connect} from 'react-redux'


class Post extends Component{


    // deletePost(id) => {
    //     fetch(`http://localhost:5000/api/v1/posts/${this.props.postObj.id}`,{
    //         method:"DELETE"
    //     })
    
    render(){


        // const post = this.props.postObj
        // console.log("post props", this.props)
        // console.log("CONTENT", this.props.postObj.content)
        return(
            <>
        
            {this.props.user ? 
             <>
             <div class="postcard">
            <img alt={this.props.user.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.postObj.img_url}></img>
            <div class="postcardCON">
            <h4>Post user:{this.props.username}</h4> 
            <h4>Post content:{this.props.postObj.content}</h4>
            </div>
            </div>
            
            </>
            :
            <>
            <div></div>
            </>
            }
            </> 

        )
    }

}

const msp = (state) => {
    // console.log("current state", state)
    return { user: state.user}
    
}

export default connect(msp,null)(Post)