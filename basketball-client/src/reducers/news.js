/*
 * news about reducer
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:58:04
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 16:15:47
 */
import { combineReducers } from 'redux';
import { RECEIVE_NEWS_LIST } from '../actions/news';

/**
 * init state
 */
const initState = {
  list: { recent: [], top: [] },
  detail: {}
};

export const list = (state = initState.list, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_LIST:
      return action.newsList;
    default:
      return state;
  }
}

export const detail = (state = initState.detail, action) => {
  switch (action.type) {
    case 'A':
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  list,
  detail
});
