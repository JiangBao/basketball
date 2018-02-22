/*
 * news about controllers
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:54:10
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-22 16:52:05
 */
const newsService = require('../services/news');

class News {
  /**
   * get recent news list
   * @param {object} ctx
   */
  async handleGetNews(ctx) {
    const news = await newsService.getNews();
    console.log(news);
    ctx.body = 'recent news data';
  }
}

module.exports = new News();
