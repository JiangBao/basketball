/*
 * game schedule component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-01 10:35:46
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-07 17:01:22
 */
import React from 'react';
import PropTypes from 'prop-types';
import './gameSchedule.css';
import ScheduleItem from './scheduleItem';
import RightArrow from '../../svgs/rightArrow';

const GameSchedule = ({ schedule }) => (
  <div className="game-schedule clearfix">
    <div className="game-schedule-arrow game-schedule-left-arrow"><RightArrow /></div>
    <div className="game-schedule-list-wrap">
      <ul className="game-schedule-list">
        {
          schedule.map(item => (
            <ScheduleItem scheduleData={item} key={item.tag} />
          ))
        }
      </ul>
    </div>
    <div className="game-schedule-arrow game-schedule-right-arrow"><RightArrow /></div>
  </div>
);

GameSchedule.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default GameSchedule;
