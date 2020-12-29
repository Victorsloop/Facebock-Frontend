// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import Header from './Components/Header'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Counter from './Components/Counter'

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
        </div>

        <div  className="messenger-container">
          MESSENGER          

        </div>
          
      {/* < Counter/> */}
      
      
      </div>
      
    )
  }
}
  // return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

export default App;
