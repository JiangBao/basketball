/*
 * store
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 16:06:20
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 15:42:38
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(sagas);

export default store;
