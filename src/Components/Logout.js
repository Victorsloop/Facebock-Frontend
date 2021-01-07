import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
    logout = () => {
        localStorage.clear(token)
    }
    render() {
        return (
            {this.logout()}
            <Redirect to="/" />
        )
    }
}

export default Logout 