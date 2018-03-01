/*
 * side nav list containers
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 15:56:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 18:27:57
 */
import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import SideNavList from '../../components/sideNavList';
import { changeNav } from '../../actions/nav';

const NavList = ({ nav: { current, navList } }) => (
  <SideNavList current={current} navList={navList} />
);

NavList.propTypes = {
  nav: PropsTypes.shape({
    current: PropsTypes.string,
    navList: PropsTypes.array
  }).isRequired
};

export default connect(
  state => ({
    nav: state.nav.nav
  }),
  { changeNav }
)(NavList);
