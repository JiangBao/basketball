/*
 * news page
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 11:31:15
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-01 10:18:40
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getNewsList,
  getNewsDetail,
  changeNewsDisplay
} from '../../actions/news';
import { changeNav } from '../../actions/nav';
import NewsDetail from '../../components/newsDetail';
import TopNewsList from '../../components/topNewsList';
import RecentNewsList from '../../components/recentNewsList';

class News extends Component {
  constructor(props) {
    super(props);
    let { match: { path } } = this.props;
    path = path.substring(1, path.length);
    this.props.getNewsList();
    this.props.changeNewsDisplay();
    this.props.changeNav(path);

    this.onClickNews = this.onClickNews.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickNews(tag) {
    this.props.getNewsDetail(tag);
  }

  onClickClose() {
    this.props.changeNewsDisplay();
  }

  render() {
    const {
      newsList: { recent, top },
      detail: {
        isShow, title, image, content
      }
    } = this.props;

    return (
      <div className="detail-page">
        <RecentNewsList recentNews={recent} onClickNews={this.onClickNews} />
        <TopNewsList topNews={top} onClickNews={this.onClickNews} />
        <NewsDetail
          isShow={isShow}
          title={title}
          image={image}
          content={content}
          onClickClose={this.onClickClose}
        />
      </div>
    );
  }
}

News.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  }).isRequired,
  newsList: PropTypes.shape({
    recent: PropTypes.array,
    top: PropTypes.array
  }).isRequired,
  detail: PropTypes.shape({
    isShow: PropTypes.bool,
    title: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string
  }).isRequired,
  changeNav: PropTypes.func.isRequired,
  getNewsList: PropTypes.func.isRequired,
  getNewsDetail: PropTypes.func.isRequired,
  changeNewsDisplay: PropTypes.func.isRequired
};

export default connect(
  state => ({
    newsList: state.news.list,
    detail: state.news.detail
  }),
  {
    changeNav,
    getNewsList,
    getNewsDetail,
    changeNewsDisplay
  }
)(News);
