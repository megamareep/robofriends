import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
//import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers'
import 'tachyons'

//const logger = createLogger();
//applyMiddleware ordered
const rootReducer = combineReducers({searchRobots, requestRobots});
//thunk middleware looking for function returns. So it can listen for callbacks.
//store one single object that holds state for all components.
//components no longer need to hold state.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
