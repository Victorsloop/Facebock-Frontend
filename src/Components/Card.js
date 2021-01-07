import React, {Component} from 'react'
 import {connect} from 'react-redux'


class Card extends Component{
    render(){

        return(
            <>
            <div>
                Username: {this.props.username}
            </div>
            {/* <div>
                First name: {this.props.first_name}
            </div>
            <div>
                Last name: {this.props.first_name}
            </div>
            <div>
                Hometown: {this.props.first_name}
            </div>
            <div>
                Age: {this.props.age}
            </div> */}
            </>
        )
    }

}

const msp = (state) => {
    // console.log("current state", state)
    // return { user: state.user}
    
}

export default connect(msp,null)(Card)