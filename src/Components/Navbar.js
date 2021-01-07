import React, { Component } from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


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


export default connect(msp,null)(Navbar)