import React, {Component} from 'react'
// import {connect} from 'react-redux'


class Post extends Component{
    render(){
        return(
            <div>
                <h2>Users Posts</h2>
                <h4>{this.props.user.content}</h4>
                <h4>{this.props.user.img_url}</h4>


            </div>

        )
    }

}

export default Post