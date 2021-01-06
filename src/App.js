
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import MessengerContainer from './Container/MessengerContainer'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import PostContainer from './Container/PostContainer';
import { loginUser, signupUser, returningUser} from './Redux/actions'
import { connect } from 'react-redux'

// import Counter from './Components/Counter'
class App extends React.Component{
  state = {
    user: null
  }

  signInHandler = (userInfo) => {
    console.log("loggin in", userInfo)
    fetch("http://localhost:5000/api/v1/login", {
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

  signUpHandler = (userObj) => {
    fetch('http://localhost:5000/api/v1/users', {
      method: "POST",
      header: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userObj})
    })
    .then(r => r.json())
    .then(console.log)
  }

  // componentDidMount(){
  //   const token = localStorage.getItem("token")
  //   if(token){
  //     console.log("logged in token", token)
  //     fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       accepts: "application/json",
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify({ user: token})
      
  //   })
  //   .then(r => r.json())
  //   .then(returningUser => this.setState({ user: returningUser.user}))
  //   }
  // }

  // componentDidMount(){
  //   const token = localStorage.getItem("token")
  //   if(token){
  //     fetch('http://localhost:3000/login', {
  //       method: "GET",
  //       headers: {
  //         "Authorization": 'Bearer ' + token
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(returningUser => {
  //         this.props.returning(returningUser.user)
  //       })
  //   }
  // }

  // componentDidMount(){
  //   const token = localStorage.getItem("token")
  //   if(token){
  //     fetch('http://localhost:5000/api/v1/profile', {
  //       method: "GET",
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     })
  //       .then(r => r.json())
  //       .then(returningUser => {
  //         console.log("returning user", returningUser)
  //         this.props.returning(returningUser)
  //       })
  //   }
  // }

  logoutHandler = (userObj)=> {
    localStorage.clear(userObj)
    window.location.href='/'
  }

  reduxSigninSubmitHandler = (userObj) => {
    this.props.login(userObj)
  }
  
  reduxSignupSubmitHandler = (userObj) => {
    this.props.signup(userObj)
  }

  render(){
    return(
      <div className={"parent"}>
        <div className="header-container">
        <Header />      
       < Navbar logoutHandler={this.logoutHandler}/>    
        </div>

        <div className="profile-container">          
        {/* PROFILE */}
        </div>

        <div  className="post-container">          
        {/* POSTS */}

        {/* < Route path='/' component={HomePage}/> */}

        {/* <PostContainer/> */}
        
        < Route path="/welcome" render={() => <Welcome/>}/>


        <>
        
          <>

          
          < Route path="/post" render={() => <PostContainer user={this.state.user} />}/>
          

          

          
          < Route path="/" render={() => <Welcome user={this.state.user}/>}/>
          < Route path="/signup" render={() => <Signup submitHandler={this.reduxSignupSubmitHandler}/>}/>
          < Route path="/login" render={() => <Login submitHandler={this.reduxSigninSubmitHandler} />}/>

          
          </>

        
        
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
    login: (userObj) => dispatch(loginUser(userObj)),
    signup: (userObj) => dispatch(signupUser(userObj)) ,
    returning: (userObj) => dispatch(returningUser(userObj))
  }
}


export default connect(null, mdp)(App);
