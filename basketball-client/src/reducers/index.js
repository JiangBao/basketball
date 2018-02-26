/*
 * reducers entry
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 16:10:58
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 15:31:08
 */
import { combineReducers } from 'redux';
import nav from './nav';
import news from './news';

export default combineReducers({
  nav,
  news
});
