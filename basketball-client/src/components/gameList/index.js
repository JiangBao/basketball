/*
 * game list component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-01 10:36:21
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-07 17:03:08
 */
import React from 'react';
import PropTypes from 'prop-types';
import './gameList.css';
import GameItem from './gameItem';

const GameList = ({ games }) => (
  <ul className="games-list">
    {
      games.map(item => (
        <GameItem gameData={item} key={item.tips} />
      ))
    }
  </ul>
);

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameList;
