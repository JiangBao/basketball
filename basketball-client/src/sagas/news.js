/*
 * news sagas
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:41:54
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 17:24:50
 */
import {
  all,
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  GET_NEWS_LIST,
  GET_NEWS_DETAIL,
  receiveNewsList,
  receiveNewsDetail
} from '../actions/news';
import * as newsFetch from '../fetch/news';

export function* getNewsList() {
  try {
    const resp = yield call(newsFetch.getNewsList);
    if (resp.code === 200) {
      yield put(receiveNewsList(resp.data));
    }
  } catch (e) {
    console.error(`GET_NEWS_LIST ERROR: ${e.stack}`);
  }
}

export function* getNewsDetail(action) {
  try {
    const resp = yield call(newsFetch.getNewsDetail, action.tag);
    if (resp.code === 200) {
      yield put(receiveNewsDetail(action.tag, resp.data));
    }
  } catch (e) {
    console.error(`GET_NEWS_DETAIL ERROR: ${e.stack}`);
  }
}

export function* watchNews() {
  yield all([
    takeLatest(GET_NEWS_LIST, getNewsList),
    takeLatest(GET_NEWS_DETAIL, getNewsDetail)
  ]);
}
