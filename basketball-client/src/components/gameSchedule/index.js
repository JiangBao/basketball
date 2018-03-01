/*
 * game schedule component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-01 10:35:46
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-01 10:40:05
 */
import React from 'react';
import PropTypes from 'prop-types';

const GameSchedule = ({ schedule }) => (
  <div className="game-schedule">{schedule}</div>
);

GameSchedule.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameSchedule;
