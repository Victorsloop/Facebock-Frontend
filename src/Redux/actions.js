import {INCREMENT,FETCH_POSTS} from './actionTypes'
//Functions that reutrn actions, hold all our actions that return 
export function incrementCounter(){
    return {type:INCREMENT}
}

// export function fetchPosts(){
//     console.log("IN FETCH ACTION")
//     return function(dispatch,getState ){
//         fetch("http://localhost:5000/posts")
//         .then(r => r.json())
//         .then(arrayOfPosts => {
//             dispatch({type: FETCH_POSTS, payload: arrayOfPosts})
//         })
//         .catch(console.log)
//     }
//      }
//         }   

export function fetchPosts(){
    return function (dispatch,getState){
        fetch("http://localhost:5000/posts")
        .then(r => r.json())
        .then (arrayOfPost => {
            dispatch({type: FETCH_POSTS, payload : arrayOfPost})
        })
    }
}



// export function apiReducer() {
//     return function(dispatch, getState){
//         fetch("http://localhost:5000/users)
//         .then(r => r.json())
//         .then(array => {
            
//             dispatch({type: GET_USER, payload: user})
//         })
//         .catch(console.log)
//     }
// }