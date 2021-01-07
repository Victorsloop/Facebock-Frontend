import {combineReducers} from 'redux'
// import { INCREMENT } from './actionTypes'
//Responsible for managing our state, always returns a new state object , SETSTATE MERGEES informaiton this does not 

const defaultState = {
    user:null,
    posts:[],
    counter:0
    // api: [],
}

function userReducer(prevState= defaultState.user, action){
    switch(action.type){
        case"LOGIN":
            console.log("logging in", action.payload)
            return action.payload
        case"SIGNUP":
            console.log("creating user", action.payload)
            return action.payload
        case "GET_USER":
            console.log("GETTING user", action.payload)
            return action.payload
        case "LOG_OUT":
            console.log("LOG_OUT user", action.payload)
            return action.payload
        case "POST_USER":
            return [...prevState, action.payload]
        case "UPDATE_USER":
            return [...prevState, action.payload]     
        // case "ADD_USER_POSTS":
        //     return {  posts: [prevState.posts,action.payload]}
            // return [{ user: prevState.user, posts: ...prevState.posts, action.payload }]


        default:

            return prevState
                }
}
function postsReducer(prevState = defaultState.posts, action){
    switch(action.type){
        case "FETCH_POSTS":
            console.log("IN POST REDUCER Fetching", action)
            
            return action.payload
            case "ADD_POSTS":
                console.log("IN POST REDUCER Adding",[...prevState, action.payload])
                return [...prevState, action.payload]
            case "EDIT_POSTS":
                    console.log("IN POST REDUCER", action)
                    return prevState
            case "DELETE_POSTS":
                    console.log("IN POST REDUCER Deleting", action)
                    return prevState
            case "ADD_USER_POSTS":
                    return [...prevState, action.payload]
        default:
                return prevState
    }
}

//pure functions


const rootReducer =  combineReducers({
    user: userReducer,
    posts: postsReducer
    
    // api: apiReducer
})

export default rootReducer 