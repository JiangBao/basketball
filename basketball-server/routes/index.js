/*
 * index router
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:42:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 15:40:32
 */
const Router = require('koa-router');
const newsController = require('../controllers/news');
const gamesController = require('../controllers/games');

const router = new Router();

// get news list(recent & tops)
router.get('/news/list', newsController.handleGetNewsList);

// get news datail(/news/detail?tag=xx)
router.get('/news/detail', newsController.handleGetNewsDetail);

// get games home data
router.get('/games/home', gamesController.handleGetGamesHome);

// get games by date
router.get('/games/list', gamesController.handleGetGamesList);

// get games schedule
router.get('/games/schedule', gamesController.handleGetGamesSchedule);

module.exports = router;
