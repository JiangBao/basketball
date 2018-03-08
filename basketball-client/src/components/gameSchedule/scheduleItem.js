/*
 * game schedule item
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-07 10:52:05
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-07 17:01:23
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ScheduleItem = ({
  scheduleData: {
    date, nums, week, isActive
  }
}) => (
  <li className={classnames('game-schedule-item', { active: isActive })}>
    <p className="game-schedule-item-week">{week}</p>
    <p className="game-schedule-item-date">{date}</p>
    <p className="game-schedule-item-nums">{nums}</p>
  </li>
);

ScheduleItem.propTypes = {
  scheduleData: PropTypes.shape({
    tag: PropTypes.string,
    date: PropTypes.string,
    nums: PropTypes.string,
    week: PropTypes.string,
    isActive: PropTypes.bool
  }).isRequired
};

export default ScheduleItem;
