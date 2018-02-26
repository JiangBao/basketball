/*
 * news detail component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-26 10:47:04
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-26 10:59:35
 */
import React from 'react';
import classnames from 'classnames';
import './newsDetail.css';
import Close from '../../svgs/close';

const NewsDetail = ({ isShow, title, image, content, onClickClose }) => (
  <div className={classnames('news-detail-page', {active: isShow})}>
    <span onClick={onClickClose}><Close /></span>
    <div className={classnames('news-detail')}>
      <h2 className="news-detail-title">{title}</h2>
      <img className="news-detail-img" src={image} alt="title image" />
      <p className="news-detail-content">{content}</p>
    </div>
  </div>
);

export default NewsDetail;
