/*
 * side nav list components
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 14:49:35
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-11 16:31:43
 */
import React from 'react';
import PropTypes from 'prop-types';
import './sideNavList.css';
import SideNavItem from './sideNavItem';

const SideNavList = ({ navList }) => (
  <ul className="common-side-nav">
    {
      navList.map(item => (
        <SideNavItem key={item.ID} sideNavItem={item} />
      ))
    }
    <p className="team-logo" />
  </ul>
);

SideNavList.propTypes = {
  navList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideNavList;
