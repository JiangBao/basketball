/*
 * side nav list item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 14:53:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-11 15:39:23
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Basketball from '../../svgs/basketball';

const SideNavItem = ({ sideNavItem }) => (
  <Link to={ sideNavItem.ROUTE }>
    <li className="common-side-nav-item">
      <span><Basketball /></span>
      { sideNavItem.TEXT }
    </li>
  </Link>
);

SideNavItem.propTypes = {
  sideNavItem: PropTypes.string.isRequired
};

export default SideNavItem;
