/*
 * news page
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 11:31:15
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 17:56:27
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNewsList } from '../../actions/news';
import TopNewsList from '../../components/topNewsList';
import RecentNewsList from '../../components/recentNewsList';

class News extends Component {
  constructor (props) {
    super(props);
    this.props.getNewsList();
  }

  render () {
    const { newsList: { recent, top } } = this.props;

    return (
      <div className="detail-page">
        <RecentNewsList recentNews={recent} />
        <TopNewsList topNews={top} />
      </div>
    );
  }
}

export default connect(
  state => ({
    newsList: state.news.list
  }),
  { getNewsList }
)(News);
