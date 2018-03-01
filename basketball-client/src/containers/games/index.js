/*
 * games page
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 11:30:06
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-03-01 10:43:45
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGamesHome } from '../../actions/games';
import { changeNav } from '../../actions/nav';
import GameList from '../../components/gameList';
import GameSchedule from '../../components/gameSchedule';

class Games extends Component {
  constructor(props) {
    super(props);
    let { match: { path } } = this.props;
    path = path.substring(1, path.length);
    this.props.getGamesHome();
    this.props.changeNav(path);
  }

  render() {
    const { games, schedule } = this.props;

    return (
      <div className="detail-page">
        <GameSchedule schedule={schedule} />
        <GameList games={games} />
      </div>
    );
  }
}

Games.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  }).isRequired,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  schedule: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeNav: PropTypes.func.isRequired,
  getGamesHome: PropTypes.func.isRequired
};

export default connect(
  state => ({
    games: state.games.games,
    schedule: state.games.schedule
  }),
  { changeNav, getGamesHome }
)(Games);
