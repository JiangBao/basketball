/*
 * game item component
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-03-07 16:55:48
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-08 10:39:49
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const GameItem = ({
  gameData: {
    status,
    tips,
    teams
  }
}) => {
  const { team1, team2 } = teams;
  const isTeam1Win = team1.score > team2.score;

  return (
    <li className="game-item">
      <div className="clearfix">
        <div className="game-item-teams fl">
          <div className="game-item-team game-item-team1">
            <img className="game-team-logo" src={team1.logo} alt="team-logo" />
            <p className="game-team-item game-team-name">{team1.name}</p>
            <p className={classnames('game-team-item game-team-score', { win: isTeam1Win })}>{team1.score}</p>
          </div>
          <div className="game-item-team game-item-team2">
            <img className="game-team-logo" src={team2.logo} alt="team-logo" />
            <p className="game-team-item game-team-name" >{team2.name}</p>
            <p className={classnames('game-team-item game-team-score', { win: !isTeam1Win })}>{team2.score}</p>
          </div>
        </div>
        <p className={classnames('game-status fl', { active: status.indexOf('进行中') > -1 })}>{status}</p>
      </div>
      <p>{tips}</p>
    </li>
  );
};

GameItem.propTypes = {
  gameData: PropTypes.shape({
    status: PropTypes.string,
    tips: PropTypes.string,
    teams: PropTypes.object
  }).isRequired
};

export default GameItem;
