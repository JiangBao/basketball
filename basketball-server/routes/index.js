/*
 * index router
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:42:07
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-22 16:49:00
 */
const Router = require('koa-router');
const newsController = require('../controllers/news');

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'home page';
});

router.get('/test', async (ctx) => {
  ctx.body = 'test page';
});

// get news list(recent & tops)
router.get('/news', newsController.handleGetNews);

// get games by date
router.get('/games');

module.exports = router;
