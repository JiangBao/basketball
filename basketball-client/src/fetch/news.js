/*
 * news about async request
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 15:51:08
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 15:53:28
 */
import URLS from '../config/urls';
import * as fetch from './fetch';

export const getNewsList = () => fetch.get(URLS.NEWS_LIST)
