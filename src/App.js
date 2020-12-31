
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import MessengerContainer from './Container/MessengerContainer'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login'
import Header from './Components/Header'
import PostContainer from './Container/PostContainer';
import { loginUser } from './Redux/actions'
import { connect } from 'react-redux'

// import Counter from './Components/Counter'
class App extends React.Component{
  state = {
    user: null
  }

  signInHandler = (userInfo) => {
    console.log("loggin in", userInfo)
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userInfo})
      
    })
    .then(r => r.json())
    .then(data => this.setState({ user: data.user}))
  }

  // componentDidMount(){
  //   const token = localStorage.getItem("token")
  //   if(token){
  //     fetch('http://localhost:5000//profile', {
  //       method: "GET",
  //       headers: {
  //         "Authorization": 'Bearer ' + token
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(returningUser => {
  //         this.props.returning(returningUser)
  //       })
  //   }
  // }

  reduxSigninSubmitHandler = (userObj) => {
    this.props.login(userObj)
  }

  

  render(){
    return(
      <div className={"parent"}>

        <div className="header-container">
        <Header />          
        </div>

        <div className="profile-container">          
        {/* PROFILE */}
        </div>

        <div  className="post-container">          
        {/* POSTS */}

        {/* < Route path='/' component={HomePage}/> */}

        <PostContainer/>
        
        < Route path="/welcome" render={() => <Welcome/>}/>


        <>
        { this.props.user ?
          <>

          <h1>logged in</h1>
          </>

          :

          <>
          < Route path="/" render={() => <Welcome user={this.state.user}/>}/>
          < Route path="/signup" render={() => <Signup/>}/>
          < Route path="/login" render={() => <Login submitHandler={this.reduxSigninSubmitHandler} />}/>
          
          </>

        
        }
        </>

        </div> 

          <div  className="messenger-container">

           <>
            { this.props.user ? 
            
            <MessengerContainer />
            :
            <div>

            </div>
            }
           </> 
            
          </div>
          
      {/* < Counter/> */}
      
      
      </div>
      
    )
  }
}

function mdp(dispatch){
  return {
    login: (userObj) => dispatch(loginUser(userObj)) 
  }
}


export default connect(null, mdp)(App);
