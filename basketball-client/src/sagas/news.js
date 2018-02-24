/*
 * news sagas
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:41:54
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 16:14:23
 */
import {
  all,
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  GET_NEWS_LIST,
  receiveNewsList
} from '../actions/news';
import * as newsFetch from '../fetch/news';

export function* getNewsList() {
  try {
    const resp = yield call(newsFetch.getNewsList);
    console.log(resp);
    if (resp.code === 200) {
      yield put(receiveNewsList(resp.data));
    }
  } catch (e) {
    console.error(`GET_NEWS_LIST ERROR: ${e.stack}`);
  }
}

export function* watchNews() {
  yield all([
    takeLatest(GET_NEWS_LIST, getNewsList)
  ])
}
