/*
 * index sagas
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:41:39
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 11:48:48
 */
import { all } from 'redux-saga/effects';
import { watchNews } from './news';
import { watchRanks } from './ranks';
import { watchGames } from './games';

export default function* () {
  yield all([
    watchNews(),
    watchRanks(),
    watchGames()
  ]);
}
