import React from 'react'

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
            <form onSubmit = {this.submitHandler}>
             <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
            <input type="submit" value="Login"/>
        </form>
        )
    }
}
export default Login 