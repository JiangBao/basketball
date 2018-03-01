/*
 * recent news list
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 16:25:08
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-01 10:33:39
 */
import React from 'react';
import PropTypes from 'prop-types';
import './recentNewsList.css';
import RecentNewsItem from './recentNewsItem';

const RecentNewsList = ({ recentNews, onClickNews }) => (
  <ul className="recent-news-list">
    <li><h2>NBA新闻</h2></li>
    {
      recentNews.map(news => (
        <RecentNewsItem key={news.linkTag} news={news} onClickNews={onClickNews} />
      ))
    }
  </ul>
);

RecentNewsList.propTypes = {
  recentNews: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickNews: PropTypes.func.isRequired
};

export default RecentNewsList;
