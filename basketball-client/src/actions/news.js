/*
 * news about action
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 11:55:29
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-26 16:08:20
 */
export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const GET_NEWS_DETAIL = 'GET_NEWS_DETAIL';
export const RECEIVE_NEWS_LIST = 'RECEIVE_NEWS_LIST';
export const RECEIVE_NEWS_DETAIL = 'RECEIVE_NEWS_DETAIL';
export const CHANGE_NEWS_DISPLAY = 'CHANGE_NEWS_DISPLAY';

/**
 * get news list
 * @return {object}
 */
export const getNewsList = () => ({
  type: GET_NEWS_LIST
});

/**
 * receive news list
 * @param  {object} newsList
 * @return {object}
 */
export const receiveNewsList = (newsList) => ({
  type: RECEIVE_NEWS_LIST,
  newsList
});

/**
 * get news detail
 * @param  {string} tag
 * @return {object}
 */
export const getNewsDetail = (tag) => ({
  type: GET_NEWS_DETAIL,
  tag
});

/**
 * receive news detail
 * @param  {string} tag
 * @param  {object} detail
 * @return {object}
 */
export const receiveNewsDetail = (tag, detail) => ({
  type: RECEIVE_NEWS_DETAIL,
  tag,
  detail
});

/**
 * change news detail page show or not
 * @param  {boolean} isShow
 * @return {object}
 */
export const changeNewsDisplay = (isShow=false) => ({
  type: CHANGE_NEWS_DISPLAY,
  isShow
});
