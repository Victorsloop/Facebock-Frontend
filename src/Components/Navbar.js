import React, { Component } from 'react'
import {NavLink, Redirect} from 'react-router-dom'

class Navbar extends Component{

    state={
        clicked:null
    }

    logout = () => {
        console.log(localStorage.clear())
        localStorage.clear("token")
        this.setState({clicked:true})
    }
    render (){
        return (
            <>
            <ul>
                <NavLink to="/welcome">
                <li>Welcome</li>
                </NavLink>
                <NavLink to="/login">
                <li>Login</li>
                </NavLink>
                <NavLink to="/post">
                <li>Post</li>
                </NavLink>
                <button onClick= {this.logout}>Logout</button>
                {this.state.clicked? 
                <Redirect to="/"/>
                :
                <div>LOADING</div>

                }
                {/* <NavLink to="/logout" >
                <li>Logout</li>
                </NavLink> */}
            </ul>
            </>
        )

    }
}
export default Navbar