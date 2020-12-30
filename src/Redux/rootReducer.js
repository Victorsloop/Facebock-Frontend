import {combineReducers} from 'redux'
// import { INCREMENT } from './actionTypes'
//Responsible for managing our state, always returns a new state object , SETSTATE MERGEES informaiton this does not 

const defaultState = {
    counter:0,
    user:null,
    api: []
}

// function userReducer(prevState = defaultState.api, action){
//     switch(action.type){
//         case "GET_USER":
//             return action.payload
//         case "POST_USER"
//     }

// }

function counterReducer(prevState= defaultState.counter, action){
    switch(action.type){
        case "INCREMENT_COUNTER":
        console.log("Reducer before", action)
        console.log("Reducer after", action)
         return ++prevState
         case "DECREMENT_COUNTER":
            console.log("Reducer before", action)
            console.log("Reducer after", action)
             return --prevState
         default:
        return prevState
    }
   
}

function userReducer(prevState= defaultState.user, action){
    switch(action.type){
        case"LOGIN":
        return{user:"user in here"}
        default:
            return prevState
        case "GET_USER":
            return action.payload
        case "POST_USER":
            return [...prevState, action.payload]
        case "UPDATE_USER":
            return [...prevState, action.payload]
         default: 
            return prevState
        
    }
    

}
//pure functions


const rootReducer =  combineReducers({
    counter: counterReducer,
    user: userReducer
    
    // api: apiReducer
})

export default rootReducer 