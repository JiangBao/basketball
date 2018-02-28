/*
 * games controller
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-23 11:19:57
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 15:42:02
 */
const GamesService = require('../services/games');

class Games {
  /**
   * get games homepage data
   * @param  {object} ctx
   */
  async handleGetGamesHome(ctx) {
    const result = await GamesService.getGamesHome();
    ctx.body = result;
  }

  /**
   * get games list
   * @param  {object} ctx
   */
  async handleGetGamesList(ctx) {
    
  }

  /**
   * get games schedule
   * @param  {object} ctx
   */
  async handleGetGamesSchedule(ctx) {

  }
}

module.exports = new Games();
