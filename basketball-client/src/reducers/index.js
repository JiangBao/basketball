/*
 * reducers entry
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 16:10:58
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 17:16:12
 */
import { combineReducers } from 'redux';
import nav from './nav';
import news from './news';
import games from './games';

export default combineReducers({
  nav,
  news,
  games
});
