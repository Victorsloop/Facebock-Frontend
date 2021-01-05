import React, { Component } from 'react'
import {connect} from 'react-redux'

class Welcome extends Component {

    
    render(){

        return(
           
            <>
            {this.props.user ? 
            <>
            <div></div>
            </>
            
            :

            <h1> Welcome to the best social media built during the pandemic</h1>
            }



            </>
                
            
    
        )
    }
    

}

const msp = (state) => {
    return{ user: state.user}

}


export default connect(msp, null)(Welcome) 