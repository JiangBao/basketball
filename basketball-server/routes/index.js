/*
 * index router
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:42:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-23 11:33:26
 */
const Router = require('koa-router');
const newsController = require('../controllers/news');

const router = new Router();

// get news list(recent & tops)
router.get('/news/list', newsController.handleGetNewsList);

// get news datail(/news/detail?tag=xx)
router.get('/news/detail', newsController.handleGetNewsDetail);

// get games by date
router.get('/games');

module.exports = router;
