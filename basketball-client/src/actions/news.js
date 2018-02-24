/*
 * news about action
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:55:29
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 15:00:42
 */
export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const RECEIVE_NEWS_LIST = 'RECEIVE_NEWS_LIST';
export const RECEIVE_NEWS_DETAIL = 'RECEIVE_NEWS_DETAIL';

export const getNewsList = () => ({
  type: GET_NEWS_LIST
});

export const receiveNewsList = (newsList) => ({
  type: RECEIVE_NEWS_LIST,
  newsList
});

export const receiveNewsDetail = (tag, detail) => ({
  type: RECEIVE_NEWS_DETAIL,
  tag,
  detail
});
