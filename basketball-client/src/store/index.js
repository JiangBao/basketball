/*
 * store
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 16:06:20
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-11 16:56:41
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers);

export default store;
