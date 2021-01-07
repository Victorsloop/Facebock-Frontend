import React, {Component} from 'react'
 import {connect} from 'react-redux'


class Card extends Component{
    render(){
        console.log("this is the cards",this.props.cardObj)
        return(
            <>
            <div>
               Name: {this.props.cardObj.first_name} {this.props.cardObj.last_name}
               Online:always
               <img alt={this.props.cardObj.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.cardObj.avatar}></img>

                

            </div>
            </>
        )
    }

}

const msp = (state) => {
    console.log("current state", state)
    return { user: state.user}
    
}

export default connect(msp,null)(Card)