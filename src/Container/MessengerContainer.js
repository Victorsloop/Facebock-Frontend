import React from 'react'
import {connect} from 'react-redux'
import Card from '../Components/Card'
import FilterPost from '../Components/FilterPost'

class MessengerContainer extends React.Component{
    state ={
        arrayOfUser:[],
        filterUser:""
    }


    // fetchUsers = () => {
    //     fetch("http://localhost:5000/api/v1/users")
    //     .then(r => r.json())
    //     .then (userArr => {
            

    //         this.setState({arrayOfUser: userArr })
            
    //         console.log("IN Fetching users |msnger-cont :",this.state.arrayOfUser)
    //     })
    //     .catch(console.log)
    // }

    componentDidMount(){

        fetch("http://localhost:5000/api/v1/users")
        .then(r => r.json())
        .then (userArr => {
            
    
            this.setState({arrayOfUser: userArr })
            
            console.log("IN Fetching users |msnger-cont :",this.state.arrayOfUser)
        })
        .catch(console.log)
    
        console.log("renderUsers msng-cont", this.state.arrayOfUser)

    }

    filterHandler = (e) => {
        console.log(e.target.value)
        this.setState({filterUser: e.target.value})
    }



    renderUserCards = () => {
        console.log("newrenderpost this.state.arrayOfUser", this.state.arrayOfUser)
        let desiredUser = this.state.arrayOfUser.filter(desiredUserObj => desiredUserObj.first_name.toLowerCase().includes(this.state.filterUser.toLowerCase()))
        console.log("rendering desired usercards",desiredUser)
        return desiredUser.map(card => <Card key={card.id} cardObj={card} />)

    }

    
    render(){
        return(
            <div>
               
                
                <>
                
                {this.props.user? 
                <>
                  < FilterPost filter={this.state.filterUser} filterHandler={this.filterHandler} />
                {this.renderUserCards()}
                </>
                :
                <>
                <div></div>
                </>
                
                }

                
                </>
                
                

            </div>
        )
    }
}

function msp(state){
    return {user: state.user}
  }

export default connect(msp,null)(MessengerContainer)