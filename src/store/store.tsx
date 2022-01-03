import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
// Import reducers and sagas
import { rootReducer } from './reducers';
//import sagas from './sagas';
import { persistStore } from './persistor';

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();

const middlewares = [sagaMiddleware, routerMiddleware(history)];
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable no-underscore-dangle */

 composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
}

// Export store
const store = createStore(rootReducer(), composeEnhancers(applyMiddleware(...middlewares)));

//sagas(sagaMiddleware);
persistStore(store);
// sagaMiddleware.run(watchRouter);

export { store, history };
