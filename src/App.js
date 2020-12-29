
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import Header from './Components/Header'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Counter from './Components/Counter'
import Login from './Components/Login'
import PostContainer from './Container/PostContainer'
import HeaderContainer from './Container/HeaderContainer'
import MessengerContainer from './Container/MessengerContainer'
import UserContainer from './Container/Usercontainer'
class App extends React.Component{
  state = {
    user: {}
  }

  render(){
    return(
      < >
      < Counter/>
      {/* < Header class="div1"/> */}
      < Welcome/>
      {/* < HeaderContainer class="div1" / > */}
      {/* < UserContainer class="div2" / > */}
      {/* < PostContainer class="div3" / > */}
      {/* < MessengerContainer class="div1" / > */}

      < Route path="/welcome" render={() => <Welcome/>}/>
      < Route path="/signup" render={() => <Signup/>}/>
      < Route path="/login" render={() => <Login/>}/>
      </>
    )
  }
}

export default App;
