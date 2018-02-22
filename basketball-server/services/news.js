/*
 * news service
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 16:49:30
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-22 18:08:48
 */
const axios = require('axios');
const cheerio = require('cheerio');
const CONST = require('../consts');
const dataFormat = require('./dataFormat');

class News {
  /**
   * get news (recent & top)
   * @return {object}
   */
  async getNews() {
    try {
      const url = CONST.URL.NEWS;
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const recent = this.parseRecentList($);
      const top = this.parseTopList($);
      return { recent, top }; 
    } catch (e) {
      console.error(`get news ERROR: ${e.stack}`);
      return dataFormat.errorMsg();
    }
  }

  parseRecentList($) {
    console.log('----- here -----');
    const recentList = [];
    $('.news-list').find('li').each((index, elem) => {
      const main = $(elem).find('.list-hd').find('h4').find('a');
      const title = main.text();
      const linkList = main.attr('href') && main.attr('href').split(/[\/\.]/);
      const time = $(elem).find('.time').text();
      const comeFrom = $(elem).find('.comeFrom').find('a').text();
      const linkTag = linkList.length && linkList[linkList.length - 2];
      title && recentList.push({
        title,
        linkTag,
        time,
        comeFrom
      })
    });

    return recentList;
  }

  parseTopList($) {

  }
}

module.exports = new News();
