import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './Redux/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
// import { devToolsEnhancer } from 'redux-devtools-extension';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()



const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))
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
