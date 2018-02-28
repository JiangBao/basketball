/*
 * games service
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-28 15:29:41
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 16:51:32
 */
const axios = require('axios');
const cheerio = require('cheerio');
const CONST = require('../consts');
const dataFormat = require('./dataFormat');

class Games {
  /**
   * get games homepage data
   * @return {object}
   */
  async getGamesHome() {
    try {
      const url = CONST.URL.GAMES;
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const games = this.parseGamesList($);
      const schedule = this.parseSchedule($);
      return dataFormat.successMsg({ games, schedule });
    } catch (e) {
      console.error(`GET_GAMES_HOME ERROR: ${e.stack}`);
      return dataFormat.errorMsg();
    }
  }

  /**
   * parse games schedule data
   * @param  {object} $
   * @return {array}
   */
  parseSchedule($) {
    const schedule = [];

    $('.table_list_c').find('li').each((index, elem) => {
      const week = $(elem).find('a').find('p').text();
      const link = $(elem).find('a').attr('href');
      const isActive = $(elem).attr('class') === 'on';
      const date = $(elem).find('.team').find('.name').text();
      const nums = $(elem).find('.team2').find('.name').text();
      const linkList = link && link.split('/');
      const tag = linkList.length && linkList[linkList.length - 1];

      schedule.push({
        tag,
        date,
        nums,
        week,
        isActive
      });
    });

    return schedule;
  }

  /**
   * parse games list data
   * @param  {object} $
   * @return {array}
   */
  parseGamesList($) {
    const games = [];

    $('.gamecenter_content_l').find('.list_box').each((index, elem) => {
      const status = $(elem).find('.team_vs_b').find('.b').text();
      const teams = $(elem).find('.team_vs_a');
      const team1_logo = $(teams).find('.team_vs_a_1').find('.img').find('img').attr('src');
      const team1_name = $(teams).find('.team_vs_a_1').find('.txt').find('a').text();
      const team1_score = $(teams).find('.team_vs_a_1').find('.txt').find('.num').text();
      const team2_logo = $(teams).find('.team_vs_a_2').find('.img').find('img').attr('src');
      const team2_name = $(teams).find('.team_vs_a_2').find('.txt').find('a').text();
      const team2_score = $(teams).find('.team_vs_a_2').find('.txt').find('.num').text();
      const tips = $(elem).find('.tips').find('a').text();

      games.push({
        status,
        tips,
        teams: {
          team1: {
            logo: team1_logo,
            name: team1_name,
            score: team1_score
          },
          team2: {
            logo: team2_logo,
            name: team2_name,
            score: team2_score
          }
        }
      });
    });

    return games;
  }
}

module.exports = new Games();
