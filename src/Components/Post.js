import React, {Component} from 'react'
 import {connect} from 'react-redux'


class Post extends Component{
    render(){
        return(
            <div>
                <h2>Users Posts</h2>
                <h4>{this.props.user.posts.content}</h4>
                <h4>{this.props.user.posts.img_url}</h4>


            </div>

        )
    }

}

const msp = (state) => {
    console.log("current state", state)
    return { user: state.user}
    
}

export default connect(msp,null)(Post)