/*
 * side nav list containers
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-10 15:56:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-19 15:21:55
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNavList from '../../components/sideNavList';
import { changeNav } from '../../actions/nav';

class NavList extends Component {
  onSelectNav (nav) {
    this.props.changeNav(nav);
  }

  render () {
    const { nav: {current, navList} } = this.props;
    
    return (
      <SideNavList current={current} navList={navList} onSelectNav={this.onSelectNav.bind(this)} />
    )
  }
}

export default connect(
  state => ({
    nav: state.nav
  }),
  { changeNav }
)(NavList);
