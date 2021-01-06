import React, { Component } from 'react'
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import '../App.css';



export class HomePage extends Component {

    state = {
        currentUser: null
    }

    componentDidMount(){
        console.log("homepage mounted")
    }

    submitHandler = (obj) => {
        fetch("http://localhost:5000/api/v1/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body:JSON.stringify(obj)
        })
        .then(r => r.json())
        .then(user => {
            this.setState({currentUser: user})
        })
        
    }
    
    

    render() {
        return (
            <div>
                
                < Welcome/> 
                <div className={"post-container"}>
                <Login />
                <Signup />

                </div>
            </div>
                

        )
    }
}

export default HomePage
