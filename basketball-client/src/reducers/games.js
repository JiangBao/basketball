/*
 * games reducer
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-28 17:04:05
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-06 17:07:13
 */
import { combineReducers } from 'redux';
import {
  RECEIVE_GAMES_LIST,
  RECEIVE_GAMES_SCHEDULE
} from '../actions/games';

/**
 * init state
 */
const initState = {
  games: [],
  schedule: []
};

export const schedule = (state = initState.schedule, action) => {
  switch(action.type) {
    case RECEIVE_GAMES_SCHEDULE:
      return action.schedule;
    default:
      return state;
  }
}

export const games = (state = initState.games, action) => {
  switch(action.type) {
    case RECEIVE_GAMES_LIST:
      return action.games;
    default:
      return state;
  }
}

export default combineReducers({
  games,
  schedule
});
