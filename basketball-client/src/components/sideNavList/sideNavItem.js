/*
 * side nav list item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 14:53:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 18:24:56
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Basketball from '../../svgs/basketball';

const SideNavItem = ({ current, sideNavItem: { ID, ROUTE, TEXT } }) => (
  <Link to={ROUTE} href={ROUTE}>
    <li className={classnames('common-side-nav-item', { active: current === ID })} >
      <span className="common-side-nav-item-icon"><Basketball /></span>
      { TEXT }
    </li>
  </Link>
);

SideNavItem.propTypes = {
  current: PropTypes.string.isRequired,
  sideNavItem: PropTypes.objectOf(PropTypes.string).isRequired
};

export default SideNavItem;
