/*
 * top news list
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-24 17:12:20
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 17:46:33
 */
import React from 'react';
import PropTypes from 'prop-types';
import './topNewsList.css';
import TopNewsItem from './topNewsItem';

const TopNewsList = ({ topNews }) => (
  <ul className="top-news-list">
    <li><h4>24小时新闻榜</h4></li>
    {
      topNews.map((news, index) => (
        <TopNewsItem key={news.linkTag} news={news} index={index+1} />
      ))
    }
  </ul>
);

TopNewsList.propTypes = {
  topNews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TopNewsList;
