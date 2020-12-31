
import './App.css';
import React from 'react'
import Welcome from './Components/Welcome'
import MessengerContainer from './Container/MessengerContainer'
import {Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Login from './Components/Login'
import Header from './Components/Header'
import PostContainer from './Container/PostContainer';
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
<<<<<<< HEAD
        {/* < Route path='/' component={HomePage}/> */}
=======
        <PostContainer/>
        < Route path='/' component={HomePage}/>
        < Route path="/welcome" render={() => <Welcome/>}/>
>>>>>>> 7dde004c7e6103fd66874625e06f83c6007b18f9

        <>
        { this.props.user ?
          <>

          <h1>logged in</h1>
          </>

          :

          <>
          < Route path="/" render={() => <Welcome user={this.state.user}/>}/>
          < Route path="/" render={() => <Signup/>}/>
          < Route path="/" render={() => <Login submitHandler={this.signInHandler} />}/>
          
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

export default App;
