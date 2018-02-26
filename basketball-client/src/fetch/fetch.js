/*
 * fetch util
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 15:49:02
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 16:02:58
 */
import fetch from 'isomorphic-fetch';
import urlUtil from 'url';

export const get = (pathname, query = {}) =>
  fetch(urlUtil.format({
    pathname, query
  }), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'true'
  }).then(res => res.json());
