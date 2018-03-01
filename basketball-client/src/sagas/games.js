/*
 * games sagas
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:42:20
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 17:48:24
 */
import {
  all,
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  GET_GAMES_HOME,
  receiveGamesList,
  receiveGamesSchedule
} from '../actions/games';
import * as gamesFetch from '../fetch/games';

export function* getGamesHome() {
  try {
    const resp = yield call(gamesFetch.getGamesHome);
    if (resp.code === 200) {
      const { games, schedule } = resp.data;
      yield [
        put(receiveGamesList(games)),
        put(receiveGamesSchedule(schedule))
      ];
    }
  } catch (e) {
    console.error(`GET_GAMES_HOME ERROR: ${e.stack}`);
  }
}

export function* watchGames() {
  yield all([
    takeLatest(GET_GAMES_HOME, getGamesHome)
  ]);
}
