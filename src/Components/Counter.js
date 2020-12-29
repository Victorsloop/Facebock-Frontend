import React from 'react'
import {connect} from 'react-redux'
function Counter(props){
    return<h4>Counter {props.counter}</h4>
}

function msp(state){
    return{counter: state.counter}
}
export default connect(msp)(Counter)