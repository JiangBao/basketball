/*
 * dataFormat logic
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 17:00:12
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-22 17:10:30
 */
const CONST = require('../consts');

module.exports = {
  /**
   * success message formation
   * @param  {number} code
   * @param  {string} msg
   * @param  {object} data
   * @return {object}
   */
  successMsg: (data, code = CONST.CODE.SUCCESS, msg = 'success') => {
    return {
      code,
      msg,
      data
    }
  },

  /**
   * error message formation
   * @param  {number} code
   * @param  {string} msg
   * @return {object}
   */
  errorMsg: (code = CONST.CODE.SERVER_ERR, msg = 'failed') => {
    return {
      code,
      msg,
      data: []
    }
  }
};
