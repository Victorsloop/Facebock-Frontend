import React from 'react'

class Signup extends React.Component{

    state = {
        username:"",
        password:""
    }

    render(){
        return (
            <form>
                <input type="text" name="Username" placeholder="Username" value="" onChange=""/> 
                <input type="text" name="Password" placeholder="Password" value="" onChange=""/> 
                <input type="text" name="Hometown" placeholder="Hometown" value="" onChange=""/> 
                <input type="number" name="Age" placeholder="Age" value="" onChange=""/> 
                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}
export default Signup