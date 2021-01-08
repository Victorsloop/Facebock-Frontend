import React from 'react'
import { Redirect } from 'react-router-dom'
// import {signupUser} from '../Redux/actions'
// import {connect} from 'react-redux'

class Signup extends React.Component{

    state = {
        username:"",
        password:"",
        age:"",
        hometown:"",
        first_name:"",
        last_name:"",
        avatar:""
        
        // finished:null
    }

    inputHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
    }
    submitHandler = (e) => {
        e.preventDefault()
        // this.props.createUsers(this.state)
        this.props.submitHandler(this.state)
        this.setState({finished:true})
        
    }

    render(){
        return (
            <>
            { this.state.finished?
            <>
                <Redirect to="/welcome" /> 
            </>
            :
            <>
            <div class="login-box">
            <form onSubmit = {this.submitHandler} >
            <div class="user-box">
                <input type="text" name="first_name" placeholder="first_name" value={this.state.first_name} onChange={this.inputHandler} /> 
                <input type="text" name="last_name" placeholder="last_name" value={this.state.last_name} onChange={this.inputHandler} /> 
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
                <input type="text" name="hometown" placeholder="Hometown" value={this.state.hometown} onChange={this.inputHandler}/> 
                <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.inputHandler}/> 
                <input type="number" name="avatar" placeholder="PIC" value={this.state.avatar} onChange={this.inputHandler}/> 
                
                <input type="submit" value="Sign Up"/>
                </div>
            </form>
            </div>
            </>

            }
            </>
        )
    }


}

export default Signup