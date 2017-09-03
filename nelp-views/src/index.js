import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SearchPage from './containers/search_page'
import AboutMePage from './components/about_me_page'

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <div>
        <Redirect from="/" exact to="/search" />
        <Switch>
          <Route path='/search' component={SearchPage}/>
          <Route path='/about' component={AboutMePage}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
