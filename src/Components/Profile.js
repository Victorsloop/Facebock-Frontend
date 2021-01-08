import React,{Component} from 'react'
import {connect} from 'react-redux'
import EditUser from './EditUser'
import {reduxLogout} from '../Redux/actions'

class Profile extends Component{

    state = {
        editClicked: false
    }

    editClicked = () => {
        this.setState({editClicked: !this.state.editClicked})
        
        // this.setState({editClicked: true})
        
        console.log("this.state.editClicked")
            
           
        
        // if(this.editClicked === false){
        //     this.setState({editClicked: true})
            
        // } else if(this.editClicked === true) {
        //     this.setState({editClicked: false})

        // }

    }

    editUserProfile = () => {
        console.log("editing profile")
        if(this.state.editClicked === true){
            return (< EditUser user={this.props.userObj}  />)
        }
        
    }

    deleteUser = ()=> {
        console.log("in deleteuser",this.props.userObj)
        fetch(`http://localhost:5000/api/v1/users/${this.props.userObj.id}`,{
            method:"DELETE"
            
        })
        .then(r => r.json())
        .then (data=> {
            console.log("new users list in server",data)
            localStorage.clear('token')
            this.props.reduxLogout()
        })
        .catch(console.log)

    }


    deleteProfile = () => {
        // console.log("editing profile")
        if(this.state.editClicked === false && this.props.userObj){
        
            return (<button onClick={this.deleteUser}>DELETE  🥲</button>)
        }
        
    }
    renderProfile = ()=> {

        // if(this.props.userObj.friends ||this.props.userObj.user.friends ){
        //     return <h5> How old is you: {this.props.userObj.age}</h5>
        //         <h5> Where you from: {this.props.userObj.hometown}</h5>
        // } else {
        //     return <div>messed up</div>
        // }
    }

    render(){
        console.log("profile.js /this.props.userObj", this.props.userObj)
        return(
            <>
            {this.props.userObj? 
            
            <div class="profilecard">
            
            <img alt={this.props.userObj.username} style={{ maxWidth: "70vw", maxHeight: "20vh" }}src={this.props.userObj.avatar}></img>
            <h1>{this.props.userObj.username}</h1>
            <p class="title">CEO & Founder</p>
            <p><button class="profilebutton">Contact</button></p>

            
            {

                this.props.userObj.friends? 
                <>
                Number of Homie: {this.props.userObj.friends.length}
                </>
                :
                <>
                <div>Go make friends</div>

                </>

            }
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

            {this.renderProfile()}



            {this.props.userObj.friends? 
            <>

            <h5> How old is you: {this.props.userObj.age}</h5>
            <h5> Where you from: {this.props.userObj.hometown}</h5>

            </>
            :
            <>
            <div>messed up</div>
            </>
            }
        


            <button class="editbutton" onClick={this.editClicked} >{this.state.editClicked? "Im perfect": "Edit Profile"} </button>
            </div>
            :
            <div>
            </div>
            }
            {/* {this.state.beenClicked? "Im perfect": "Edit Profiel"} */}

            {this.editUserProfile()}
            {this.deleteProfile()}

            {/* <button>DELETE 🥲</button> */}

            </>
        )
    }

}

const msp = (state) => {
    return{ userObj: state.user}

}

function mdp(dispatch){
    return{
        reduxLogout: () => dispatch(reduxLogout())
    
    }
    
}



export default connect(msp,mdp)(Profile)