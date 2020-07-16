import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App'
import reducer from './reducers/reducer'

const store = createStore(reducer, devToolsEnhancer(
  // /shrug
));

ReactDOM.render(
  <Provider store={store}>
    <App />
    
  </Provider>
, document.getElementById('root'))

export default store