import React from 'react'
import {connect} from 'react-redux'
import {returningUser} from '../Redux/actions'
import './Stylesheet.css'

class EditUser extends React.Component {

    state ={
        age:"",
        username: "",
        vaccinated: null,
        first_name: "",
        last_name: "",
        avatar: "",
    }

    componentDidMount(){
        this.setState({
            age: this.props.user.age,
            username: this.props.user.username,
            vaccinated: this.props.user.vaccinated,
            first_name: this.props.user.first_name,
            last_name: this.props.user.last_name,
            avatar: this.props.user.avatar,
        })
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
            this.props.returningUser(userObj.user)
            
        })
        .catch(console.log)
    }
        render(){

            return(
                <>
                <form onSubmit={this.editUserFetch}>
                <input type="text" name="age"placeholder={this.props.user.age} value={this.state.age} onChange={this.userFormHandler}/>
                <input type="text" name="username"placeholder={this.props.user.username} value={this.state.username} onChange={this.userFormHandler}/>
                <input type="text" name="first_name"placeholder={this.props.user.first_name} value={this.state.first_name} onChange={this.userFormHandler}/>
                <input type="text" name="last_name"placeholder={this.props.user.last_name} value={this.state.last_name} onChange={this.userFormHandler}/>
                <input type="text" name="avatar"placeholder={this.props.user.avatar} value={this.state.avatar} onChange={this.userFormHandler}/>
                
                <button class="editbutton">Correct!</button>
                {/* <button>DELETE 🥲</button> */}
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

function mdp(dispatch){
    return{
        returningUser: (userObj) => dispatch(returningUser(userObj))
    
    }
    
}

export default connect(msp, mdp) (EditUser)

