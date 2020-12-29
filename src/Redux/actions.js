import {INCREMENT} from './actionTypes'
//Functions that reutrn actions, hold all our actions that return 
export function incrementCounter(){
    return {type:INCREMENT}
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