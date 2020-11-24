import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(thunk))
// console.log(store)
// store.dispatch({type: "FETCH_SAMPLES"})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter />
        <App />
      <BrowserRouter /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

