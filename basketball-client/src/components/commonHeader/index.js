/*
 * common header components
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-09 17:11:20
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-09 23:51:20
 */
import React from 'react';
import './commonHeader.css';
import CommonLogo from '../../svgs/commonLogo';

const CommonHeader = () => (
  <header className="common-header">
    <CommonLogo />
    <h1 className="common-header-title">Basketball</h1>
  </header>
);

export default CommonHeader;
