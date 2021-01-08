import {INCREMENT,FETCH_POSTS, LOGIN, SIGNUP,ADD_POSTS, GET_USER,ADD_USER_POSTS, LOG_OUT} from './actionTypes'
//Functions that reutrn actions, hold all our actions that return 
export function incrementCounter(){
    return {type:INCREMENT}
}

export function fetchPosts(filteredPosts){
    console.log("IN POSTS FETCH ACTION",filteredPosts)
    return {type: FETCH_POSTS, payload : filteredPosts}
}


// export function fetchPosts(){
//     console.log("IN FETCH ACTION")
//     return function (dispatch, getState){
//         fetch("http://localhost:5000/api/v1/posts")
//         .then(r => r.json())
//         .then (arrayOfPost => {
//             console.log("IN ACTIONS SHOWING ARRAY",arrayOfPost)
//             dispatch({type: FETCH_POSTS, payload : arrayOfPost})
//         })
//         .catch(console.log)
//     }
// }

export function addPosts(newPostObject){
    console.log("IN FETCH ACTION ADDING",newPostObject)
    return function (dispatch, getState){
        fetch("http://localhost:5000/api/v1/posts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(newPostObject)
        })
        .then(r => r.json())
        .then (postObject => dispatch({type: ADD_USER_POSTS ,payload: postObject}))
        .catch(console.log)
    }
}


export function loginUser(userObj) {
    return function(dispatch, getState){
        fetch('http://localhost:5000/api/v1/login', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(checkedUserObj => {
                console.log("checkedUserObj:",checkedUserObj)
                localStorage.setItem("token", checkedUserObj.jwt)
                dispatch({type: LOGIN, payload: checkedUserObj.user})
                
                // console.log("checkedUserObj.posts:",checkedUserObj.user.posts)
                // dispatch({type: ADD_POSTS, payload: checkedUserObj.user.posts})
            })
            .catch(console.log)
    }
}

export function signupUser(userObj) {


    return function (dispatch, getState) {
        // console.log("userobj in signup",userObj)
        fetch('http://localhost:5000/api/v1/users', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(newUserObj => {

                const newWallObj = {
                    user_id: newUserObj.id
                  }
                  fetch("http://localhost:5000/api/v1/walls",{
                        method:"POST",
                        headers:{
                            "Content-Type": "application/json",
                            "Accepts": "application/json"
                        },
                        body:JSON.stringify(newWallObj)
                    })
                    .then(r => r.json())
                    .then (data=>{
                        console.log("new user wall created!!!!!!",data)}
                        )
                    .catch(console.log)


                localStorage.setItem("token", newUserObj.jwt)
                dispatch({type: SIGNUP, payload: newUserObj.user})
            
            })
            .catch(console.log)
    }
}

export function returningUser(userObj) {
    return {type: GET_USER, payload: userObj.user}
    
    
}

export function reduxLogout(){
    return {type:LOG_OUT, payload: null}
}