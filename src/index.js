import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './Redux/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.dispatch({type: "FETCH_POST"})

ReactDOM.render(
  <Provider store={store}>
 <BrowserRouter>
  <React.StrictMode>
    <App class="parent" />
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
