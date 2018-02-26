/*
 * news page
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 11:31:15
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-26 10:57:42
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getNewsList,
  getNewsDetail,
  changeNewsDisplay
} from '../../actions/news';
import NewsDetail from '../../components/newsDetail';
import TopNewsList from '../../components/topNewsList';
import RecentNewsList from '../../components/recentNewsList';

class News extends Component {
  constructor (props) {
    super(props);
    this.props.getNewsList();
    this.props.changeNewsDisplay();
  }

  onClickNews (tag) {
    this.props.getNewsDetail(tag);
  }

  onClickClose () {
    this.props.changeNewsDisplay();
  }

  render () {
    const {
      newsList: { recent, top },
      detail: { isShow, title, image, content }
    } = this.props;

    return (
      <div className="detail-page">
        <RecentNewsList recentNews={recent} onClickNews={this.onClickNews.bind(this)} />
        <TopNewsList topNews={top} onClickNews={this.onClickNews.bind(this)} />
        <NewsDetail isShow={isShow} title={title} image={image} content={content} onClickClose={this.onClickClose.bind(this)} />
      </div>
    );
  }
}

export default connect(
  state => ({
    newsList: state.news.list,
    detail: state.news.detail
  }),
  { getNewsList, getNewsDetail, changeNewsDisplay }
)(News);
