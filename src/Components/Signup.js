import React from 'react'
// import {signupUser} from '../Redux/actions'
// import {connect} from 'react-redux'

class Signup extends React.Component{

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
        // this.props.createUsers(this.state)
        this.props.submitHandler(this.state)

    }

    render(){
        return (
            <form onSubmit = {this.submitHandler}>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.inputHandler} /> 
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.inputHandler}/> 
                {/* <input type="text" name="Hometown" placeholder="Hometown" value={this.state.hometown} onChange={this.inputHandler}/> 
                <input type="number" name="Age" placeholder="Age" value={this.state.age} onChange={this.inputHandler}/>  */}
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

// function mdp(dispatch){
//     return {
//         createUsers: (newUserObject) => dispatch(signupUser(newUserObject))
//     }
// }



// export default connect(null, mdp)(Signup)
export default Signup