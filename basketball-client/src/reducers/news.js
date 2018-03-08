/*
 * news about reducer
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:58:04
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-07 10:35:02
 */
import { combineReducers } from 'redux';
import {
  RECEIVE_NEWS_LIST,
  RECEIVE_NEWS_DETAIL,
  CHANGE_NEWS_DISPLAY
} from '../actions/news';

/**
 * init state
 */
const initState = {
  list: { recent: [], top: [] },
  detail: { isShow: false, title: '', image: '', content: '' }
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
    case RECEIVE_NEWS_DETAIL:
      return { isShow: true, ...action.detail };
    case CHANGE_NEWS_DISPLAY:
      return {
        isShow: action.isShow,
        title: state.title,
        image: state.image,
        content: state.content
      }
    default:
      return state;
  }
}

export default combineReducers({
  list,
  detail
});
