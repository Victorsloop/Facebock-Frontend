import React,{Component} from 'react'
import {connect} from 'react-redux'
import EditUser from './EditUser'

class Profile extends Component{

    state = {
        editClicked: false
    }

    editClicked = () => {
    
            this.setState({editClicked: true})
        
        // if(this.editClicked === false){
        //     this.setState({editClicked: true})
            
        // } else if(this.editClicked === true) {
        //     this.setState({editClicked: false})

        // }

    }

    editUserProfile = () => {
        console.log("editing profile")
        if(this.state.editClicked === true){
            return (< EditUser  />)
        }
        
    }
    render(){
        console.log("profile.js /this.props.userObj", this.props.userObj)
        return(
            <>
            {this.props.userObj? 
            
            <div>
            
            <h1> User: {this.props.userObj.username}</h1>
            <img alt={this.props.userObj.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.userObj.avatar}></img>
            
            {

                this.props.userObj.vaccinated? 
                <>
                <h5>Vaccinated: Truuuu</h5>
                </>
                :
                <>
                <h5>Vaccinated: Naahhh</h5>

                </>

            }
            
            <h5> Number of Homie: {this.props.userObj.friends.length}</h5>
            <h5> How old is you: {this.props.userObj.age}</h5>
            <h5> Where you from: {this.props.userObj.hometown}</h5>
        


            </div>
            :
            <div>
            </div>
            }
            {/* {this.state.beenClicked? "Im perfect": "Edit Profiel"} */}

            <button onClick={this.editClicked} >Edit Profile</button>
            {this.editUserProfile()}

            </>
        )
    }

}

const msp = (state) => {
    return{ userObj: state.user}

}


export default connect(msp,null)(Profile)