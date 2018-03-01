/*
 * games about action
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-28 17:01:56
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 17:14:08
 */
export const GET_GAMES_HOME = 'GET_GAMES_HOME';
export const RECEIVE_GAMES_LIST = 'RECEIVE_GAMES_LIST';
export const RECEIVE_GAMES_SCHEDULE = 'RECEIVE_GAMES_SCHEDULE';

/**
 * get games homepage data
 * @return {object}
 */
export const getGamesHome = () => ({
  type: GET_GAMES_HOME
});

/**
 * receive games list data
 */
export const receiveGamesList = games => ({
  type: RECEIVE_GAMES_LIST,
  games
});

/**
 * receive games schedule
 * @param  {object} schedule
 * @return {object}
 */
export const receiveGamesSchedule = schedule => ({
  type: RECEIVE_GAMES_SCHEDULE,
  schedule
});
