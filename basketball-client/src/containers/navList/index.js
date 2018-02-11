/*
 * side nav list containers
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 15:56:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-11 16:48:44
 */
import React from 'react';
import { connect } from 'react-redux';
import SideNavList from '../../components/sideNavList';

const NavList = () => {
  console.log(this.props);
  const NAV_LIST = [
    {
      ID: 'news',
      TEXT: '焦点新闻',
      ROUTE: '/news'
    }, {
      ID: 'games',
      TEXT: '球场实况',
      ROUTE: '/games'
    }, {
      ID: 'ranks',
      TEXT: '数据排行',
      ROUTE: '/ranks'
    }
  ];

  return <SideNavList navList={NAV_LIST} />;
};

export default connect(
  state => ({
    nav: state.nav
  })
)(NavList);
