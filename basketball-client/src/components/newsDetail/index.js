/*
 * news detail component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-26 10:47:04
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-01 10:33:01
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './newsDetail.css';
import Close from '../../svgs/close';

const NewsDetail = ({
  isShow, title, image, content, onClickClose
}) => (
  <div className={classnames('news-detail-page', { active: isShow })}>
    <span onClick={onClickClose}><Close /></span>{/*eslint-disable-line*/}
    <div className={classnames('news-detail')}>
      <h2 className="news-detail-title">{title}</h2>
      <img className="news-detail-img" src={image} alt="title" />
      <p className="news-detail-content">{content}</p>
    </div>
  </div>
);

NewsDetail.propTypes = {
  isShow: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClickClose: PropTypes.func.isRequired
};

export default NewsDetail;
