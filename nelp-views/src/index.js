import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LoginPage from './components/login_page'
import AboutMePage from './components/about_me_page'

import registerServiceWorker from './registerServiceWorker';
import './styles/app.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/about' component={AboutMePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();