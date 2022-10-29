import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { watcherSaga } from './sagas/rootSaga';
import regionReducers from './reducers/region';

const reducers = combineReducers({ regions: regionReducers });

const sagaMiddleware = createSagaMiddleware();
const middlware = [sagaMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlware))
);

sagaMiddleware.run(watcherSaga);

export default store;
