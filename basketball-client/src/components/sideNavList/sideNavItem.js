/*
 * side nav list item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 14:53:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-19 14:53:22
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Basketball from '../../svgs/basketball';

const SideNavItem = ({ current, sideNavItem: {ID, ROUTE, TEXT}, onSelectNav }) => (
  <Link to={ ROUTE }>
    <li className={classnames('common-side-nav-item', {active: current === ID})} onClick={onSelectNav.bind(this, ID)} >
      <span className="common-side-nav-item-icon"><Basketball /></span>
      { TEXT }
    </li>
  </Link>
);

SideNavItem.propTypes = {
  sideNavItem: PropTypes.objectOf(PropTypes.string).isRequired
};

export default SideNavItem;
