/*
 * news about controllers
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:54:10
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-23 16:05:06
 */
const newsService = require('../services/news');

class News {
  /**
   * get news list
   * @param {object} ctx
   */
  async handleGetNewsList(ctx) {
    const news = await newsService.getNewsList();
    ctx.body = news;
  }

  /**
   * get news datail
   * @param  {object} ctx
   */
  async handleGetNewsDetail(ctx) {
    const { tag } = ctx.query;
    const detail = await newsService.getNewsDetail(tag);
    ctx.body = detail;
  }
}

module.exports = new News();
