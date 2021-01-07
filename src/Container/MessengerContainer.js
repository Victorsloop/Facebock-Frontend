import React from 'react'
import {connect} from 'react-redux'
import Card from '../Components/Card'

class MessengerContainer extends React.Component{
    state ={
        arrayOfUser:[]
    }


    renderUser = () => {
        fetch("http://localhost:5000/api/v1/users")
        .then(r => r.json())
        .then (userArr => {
            

            this.setState({arrayOfUser: userArr })
            
            console.log("IN Fetching users |msnger-cont :",this.state.arrayOfUser)
        })
        .catch(console.log)
    }

    renderUsers = () => {
        // console.log("newrenderpost this.props.user", this.props.user)
        console.log("renderUsers msng-cont", this.state.newPostArray)
        return this.state.arrayOfUser.map(card => <Card key={card.id} cardObj={card} user={card.user.username}/>)
        // return this.props.user.posts.map(post => <Post key={post.id} postObj={post} user={post.user}/>)

    }

    
    render(){
        return(
            <div>
                {this.props.user? 
                
                <>
                MessengerContainer | user logged in state 
                {this.renderUsers()}

                </>
                :
                <>
                
                MessengerContainer  |Not logged in
                </>
                
                }

            </div>
        )
    }
}

function msp(state){
    return {user: state.user}
  }

export default connect(msp,null)(MessengerContainer)