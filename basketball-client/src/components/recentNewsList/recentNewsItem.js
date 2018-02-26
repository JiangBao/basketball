/*
 * recent news item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 16:31:30
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 16:57:58
 */
import React from 'react';

const RecentNewsItem = ({ news, onClickNews }) => (
  <li className="recent-news-item">
    <h3 className="recent-news-item-title" onClick={onClickNews.bind(this, news.linkTag)}>{ news.title }</h3>
    <p>{ news.time }</p>
    <p>来自：<a href={news.comeFromLink} target="_blank">{ news.comeFromText }</a></p>
  </li>
);

export default RecentNewsItem;
