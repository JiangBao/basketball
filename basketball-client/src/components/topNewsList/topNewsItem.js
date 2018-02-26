/*
 * top news item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 17:40:13
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 17:48:06
 */
import React from 'react';

const TopNewsItem = ({news, index, onClickNews}) => (
  <li className="top-news-item" onClick={onClickNews.bind(this, news.linkTag)}>
    <p>{index}、{news.title}</p>
  </li>
);

export default TopNewsItem;
