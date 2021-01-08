import React, {Component} from 'react'
 import {connect} from 'react-redux'


class Card extends Component{
    render(){
        console.log("this is the cards",this.props.cardObj)
        return(
            <>
            <h3>uSeR</h3>
            <div class="card">
               <img alt={this.props.cardObj.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.cardObj.avatar}></img>
               <div class="container">
               Name: {this.props.cardObj.first_name} {this.props.cardObj.last_name}
               <br></br>
               Online: 🟢
               </div>

                

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