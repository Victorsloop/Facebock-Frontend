import React from 'react'

class Login extends React.Component{

    state = {
        username:"",
        password:""
    }
    render(){
        return(
            <form>
            <input type="text" name="Username" placeholder="Username" value="" onChange=""/> 
            <input type="text" name="Password" placeholder="Password" value="" onChange=""/> 
            <input type="submit" value="Login"/>
        </form>
        )
    }
}
export default Login 