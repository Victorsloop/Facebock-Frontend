import React from 'react'
import {connect} from 'react-redux'

class EditUser extends React.Component {

    state ={
        age:"",
        username: "",
        vaccinated: null,
        first_name: "",
        last_name: "",
        avatar: "",
    }

    userFormHandler = (e) => {
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }
    
    editUserFetch = ()=> {
        const userState = this.state
        fetch(`http://localhost:5000/api/v1/users/${this.props.userObj.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(userState)
        })
        .then(r => r.json())
        .then (userObj => {
            console.log("edited user in backend",userObj)
        })
        .catch(console.log)
    }
        render(){

            return(
                <>
                <form onSubmit={this.editUserFetch}>
                <input type="text" name="age"placeholder="age" value={this.state.age} onChange={this.userFormHandler}/>
                <input type="text" name="username"placeholder="username" value={this.state.username} onChange={this.userFormHandler}/>
                <input type="text" name="first_name"placeholder="first_name" value={this.state.first_name} onChange={this.userFormHandler}/>
                <input type="text" name="last_name"placeholder="last_name" value={this.state.last_name} onChange={this.userFormHandler}/>
                <input type="text" name="avatar"placeholder="avatar_url" value={this.state.avatar} onChange={this.userFormHandler}/>
                
                <button>POST!</button>
                </form>
                </>
                )
                
            }
    
}

function msp(state){
    
    return{
        userObj: state.user
    }

}

export default connect(msp, null) (EditUser)

