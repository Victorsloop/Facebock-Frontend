
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import Header from './Components/Header'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login'
// import Counter from './Components/Counter'
class App extends React.Component{
  state = {
    user: {}
  }

  render(){
    return(
      <div className={"parent"}>

        <div className="header-container">          
        < Header/>
        {/* < Welcome/> */}
        < Route path="/welcome" render={() => <Welcome/>}/>
        
        </div>

        <div className="profile-container">          
        PROFILE
        </div>

        <div  className="post-container">          
        POSTS
        < Route path="/signup" render={() => <Signup/>}/>
        < Route path="/login" render={() => <Login/>}/>
        </div>

        <div  className="messenger-container">
          MESSENGER          

        </div>
          
      {/* < Counter/> */}
      
      
      </div>
      
    )
  }
}

export default App;
