/*
 * side nav list reducer
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 16:13:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-19 15:25:08
 */
import { combineReducers } from 'redux';
import { CHANGE_NAV } from '../actions/nav';

/*
 * inite state
 */
const initState = {
  current: 'news',
  navList: [
    {
      ID: 'news',
      TEXT: '焦点新闻',
      ROUTE: '/news'
    }, {
      ID: 'games',
      TEXT: '球场实况',
      ROUTE: '/games'
    }, {
      ID: 'ranks',
      TEXT: '数据排行',
      ROUTE: '/ranks'
    }
  ]
};

export const nav = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NAV:
      state.current = action.nav;
      return state;
    default:
      return state;
  }
};

export default nav;
