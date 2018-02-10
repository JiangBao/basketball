/*
 * side nav list containers
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 15:56:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-10 16:03:50
 */
import React from 'react';
import SideNavList from '../../components/sideNavList';

const NavList = () => {
  const NAV_LIST = ['焦点新闻', '球场实况', '数据排行'];

  return <SideNavList navList={NAV_LIST} />;
};

export default NavList;
