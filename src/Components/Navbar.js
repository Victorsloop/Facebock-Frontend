import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar(){
    return (
        <ul>
            <NavLink to="/welcome">
            <li>Welcome</li>
            </NavLink>
            <NavLink to="/login">
            <li>Login</li>
            </NavLink>
            <NavLink to="/post">
            <li>Post</li>
            </NavLink>
            <NavLink to="/logout">
            <li>Logout</li>
            </NavLink>
        </ul>
    )
}
export default Navbar