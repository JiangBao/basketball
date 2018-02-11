/*
 * side nav list reducer
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 16:13:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-11 16:57:08
 */
import { combineReducers } from 'redux';

/*
 * inite state
 */
const initState = {
  current: 'news'
};

export const nav = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  nav
});
