/*
 * news service
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 16:49:30
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 16:12:16
 */
const axios = require('axios');
const cheerio = require('cheerio');
const CONST = require('../consts');
const dataFormat = require('./dataFormat');

class News {
  /**
   * get news list (recent & top)
   * @return {object}
   */
  async getNewsList() {
    try {
      const url = CONST.URL.NEWS;
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const recent = this.parseRecentList($);
      const top = this.parseTopList($);

      return dataFormat.successMsg({ recent, top }); 
    } catch (e) {
      console.error(`get news list ERROR: ${e.stack}`);
      return dataFormat.errorMsg();
    }
  }

  /**
   * get news detail
   * @param  {string} tag
   * @return {object}
   */
  async getNewsDetail(tag) {
    try {
      const url = CONST.URL.NEWS + tag;
      const resp = await axios.get(url);
      const $ = cheerio.load(resp.data);
      const detail = this.parseNewsDetail($);
      
      return dataFormat.successMsg(detail);
    } catch (e) {
      console.error(`get news detail ERROR: ${e.stack}`);
      return dataFormat.errorMsg();
    }
  }

  /**
   * get recent news list
   * @param  {object} $
   * @return {array}
   */
  parseRecentList($) {
    const recentList = [];
    
    $('.news-list').find('li').each((index, elem) => {
      const main = $(elem).find('.list-hd').find('h4').find('a');
      const title = main.text();
      const linkList = main.attr('href') && main.attr('href').split('/');
      const time = $(elem).find('.time').text();
      const comeFrom = $(elem).find('.comeFrom').find('a');
      const comeFromText = comeFrom.text();
      const comeFromLink = comeFrom.attr('href');
      const linkTag = linkList && linkList[linkList.length - 1];

      title && recentList.push({
        title,
        linkTag,
        time,
        comeFromText,
        comeFromLink
      })
    });

    return recentList;
  }

  /**
   * get top news list
   * @param  {object} $
   * @return {array}
   */
  parseTopList($) {
    const topList = [];

    $('.hours24-top').find('li').each((index, elem) => {
      const main = $(elem).find('a');
      const title = main.text();
      const linkList = main.attr('href') && main.attr('href').split('/');
      const linkTag = linkList && linkList[linkList.length - 1];

      title && topList.push({
        title,
        linkTag
      });
    });

    return topList;
  }

  /**
   * parse news detail
   * @param  {object} $
   * @return {object}
   */
  parseNewsDetail($) {
    const title = $('.headline').text();
    const image = $('.artical-importantPic').find('img').attr('src');
    const content = $('.artical-main-content').text();

    return {
      title,
      image,
      content
    }
  }
}

module.exports = new News();
