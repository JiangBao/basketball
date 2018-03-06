/*
 * game list component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-01 10:36:21
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-06 17:06:38
 */
import React from 'react';
import PropTypes from 'prop-types';

const GameList = ({ games }) => (
  <div className="games-list">games</div>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameList;
