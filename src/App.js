
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import HomePage from './Container/HomePage'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login'
import Header from './Components/Header'
import PostContainer from './Container/PostContainer';
import Navbar from './Components/Navbar'
// import Counter from './Components/Counter'
class App extends React.Component{
  state = {
    user: {}
  }

  

  render(){
    return(
      <div className={"parent"}>
        <div className="header-container">
        <Header />      
       < Navbar/>    
        </div>

        <div className="profile-container">          
        {/* PROFILE */}
        </div>

        <div  className="post-container">          
        {/* POSTS */}
        <PostContainer/>
        < Route path='/' component={HomePage}/>
        < Route path="/welcome" render={() => <Welcome/>}/>
        < Route path="/login" render={() => <Login/>}/>
        

        {/* < Route path="/signup" render={() => <Signup/>}/> */}
        {/* < Route path="/login" render={() => <Login onsubmit={}/>}/> */}
        </div>

        <div  className="messenger-container">
          {/* MESSENGER           */}

        </div>
          
      {/* < Counter/> */}
      
      
      </div>
      
    )
  }
}

export default App;
