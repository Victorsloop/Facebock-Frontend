import React, { Component } from 'react'
import {NavLink, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { reduxLogout } from '../Redux/actions'
import '../App.css';
import './Stylesheet.css'
import './Navbar.css'


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

            {/* <ul>
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
                
            </ul> */}

            <div>
                <NavLink to="/welcome">
                <button class="navbar-buttons">Melcome</button>
                </NavLink>
                <NavLink to="/post">
                <button className="navbar-buttons">Post</button>
                </NavLink>
                <button className="navbar-buttons" onClick= {this.logout}>Logout</button>
                {this.state.clicked === true? 
                <Redirect to="/welcome"/>
                :
                <div></div>

                }
                
            </div>

            </>
            :
            <>

            <div>
                <NavLink to="/welcome">
                <button className="navbar-buttons">Welcome</button>
                </NavLink>
                <NavLink to="/signup">
                <button className="navbar-buttons">Signup</button>
                </NavLink>
                <NavLink to="/login">
                <button className="navbar-buttons">Login</button>
                </NavLink>
               
            </div>

            {/* <div>
                <NavLink to="/welcome">
                <button>Welcome</button>
                </NavLink>
                <NavLink to="/signup">
                <button>Signup</button>
                </NavLink>
                <NavLink to="/login">
                <button>Login</button>
                </NavLink>
               
            </div> */}
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