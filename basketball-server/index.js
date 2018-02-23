/*
 * entry
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:32:51
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-22 11:51:03
 */
const Koa = require('koa');
const router = require('./routes');

const app = new Koa();
const port = process.env.PORT || 8888;

// router config
app.use(router.routes());

// start & logger
app.listen(port, () => {
  console.log(`server start success at port ${port}`);
});
