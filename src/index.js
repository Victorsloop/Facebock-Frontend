import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './Redux/rootReducer'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)
store.dispatch({type: "INCREMENT_COUNTER"})

ReactDOM.render(
  <Provider store={store}>
 <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
 ,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
