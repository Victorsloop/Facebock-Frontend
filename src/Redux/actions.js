import {INCREMENT,FETCH_POSTS,ADD_POSTS} from './actionTypes'
//Functions that reutrn actions, hold all our actions that return 
export function incrementCounter(){
    return {type:INCREMENT}
}

export function fetchPosts(){
    console.log("IN FETCH ACTION")
    return function (dispatch, getState){
        fetch("http://localhost:5000/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            dispatch({type: FETCH_POSTS, payload : arrayOfPost})
        })
        .catch(console.log)
    }
}
export function addPosts(newPostObject){
    console.log("IN FETCH ACTION ADDING")
    return function (dispatch, getState){
        fetch("http://localhost:5000/posts",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body:JSON.stringify(newPostObject)
        })
        .then(r => r.json())
        .then (postObject => dispatch({type: ADD_POSTS ,payload: postObject}))
        .catch(console.log)
    }
}