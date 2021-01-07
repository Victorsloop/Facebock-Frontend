import React, { Component } from 'react'
import {connect} from 'react-redux'

class Welcome extends Component {

    // componentDidMount(){
    //     const userWall = this.props.userObj.wall
    //     const token = localStorage.getItem("token")
    //     if(userWall){
    //         console.log("user has a wall")
    //     } else if (userWall === null && token ) {
    //         const newWallObj = {
    //                 user_id: this.props.userObj.id
    //               }
    //               fetch("http://localhost:5000/api/v1/walls",{
    //                     method:"POST",
    //                     headers:{
    //                         "Content-Type": "application/json",
    //                         "Accepts": "application/json"
    //                     },
    //                     body:JSON.stringify(newWallObj)
    //                 })
    //                 .then(r => r.json())
    //                 .then (data=>{
    //                     console.log("new user wall created!!!!!!",data)}
    //                     )
    //                 .catch(console.log)
    //     }

    // }

    
    render(){

        return(
            
            <>
            {localStorage.token ? 
            <>
            <div>User logged</div>
            </>
            
            :

            <h1> Welcome to the best social media built during the pandemic</h1>
            }



            </>
                
            
    
        )
    }
    

}

const msp = (state) => {
    return{ userObj: state.user}

}


export default connect(msp, null)(Welcome) 