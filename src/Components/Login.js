import React from 'react'
import './Stylesheet.css' 
// import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class Login extends React.Component{

    state = {
        username:"",
        password:""
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    render(){
        return(
            <>
            {localStorage.token? 
            
            <div>
                {/* <Redirect to="/signup" /> */}

            </div>
            :
            <div class="login-box">
            <form onSubmit = {this.submitHandler}>
            <div class="user-box">
             <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
            <input type="submit" value="Login"/>
            </div>
            </form>
            </div>
                   
            }
            </>

        )
    }
}

const msp = (state) => {
    console.log("current state LOGIN.JS", state)
    return { user: state.user}
    


}

export default connect(msp, null)(Login) 