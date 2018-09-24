import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createSagaMiddleware from 'redux-saga';

import './index.css';
import AppScreen from './screens/AppScreen';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import sagas from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={AppScreen} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
