/*
 * side nav list item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 14:53:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-10 17:36:47
 */
import React from 'react';
import PropTypes from 'prop-types';
import Basketball from '../../svgs/basketball';

const SideNavItem = ({ sideNavItem }) => (
  <li className="common-side-nav-item">
    <span><Basketball /></span>
    { sideNavItem }
  </li>
);

SideNavItem.propTypes = {
  sideNavItem: PropTypes.string.isRequired
};

export default SideNavItem;
