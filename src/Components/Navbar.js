import React, { Component } from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { reduxLogout } from '../Redux/actions'


class Navbar extends Component{

    state={
        clicked:null
    }

    logout = () => {
        
        console.log(localStorage.clear())
        localStorage.clear("token")
        this.props.reduxLogout()
        this.setState({clicked:true})
    }
    render (){
        return (
            <>
            {this.props.userObj? 
            <>

            <ul>
                <NavLink to="/welcome">
                <li>Melcome</li>
                </NavLink>
                <NavLink to="/post">
                <li>Post</li>
                </NavLink>
                <button onClick= {this.logout}>Logout</button>
                {this.state.clicked? 
                <Redirect to="/"/>
                :
                <div></div>

                }
                
            </ul>
            </>
            :
            <>

            <ul>
                <NavLink to="/welcome">
                <li>Welcome</li>
                </NavLink>
                <NavLink to="/signup">
                <li>Signup</li>
                </NavLink>
                <NavLink to="/login">
                <li>Login</li>
                </NavLink>
                {/* <NavLink to="/post">
                <li>Post</li>
                </NavLink>
                <button onClick= {this.logout}>Logout</button>
                {this.state.clicked? 
                <Redirect to="/"/>
                :
                <div>LOADING</div>

                } */}
                
            </ul>
            </>
            }



            </>
        )

    }
}

const msp = (state) => {
    return{ userObj: state.user}

}

function mdp(dispatch){
    return{
        reduxLogout: () => dispatch(reduxLogout())
    
    }
    
}
export default connect(msp,mdp)(Navbar)