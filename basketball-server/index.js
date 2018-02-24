/*
 * entry
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-22 11:32:51
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-24 16:00:04
 */
const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('./routes');

const app = new Koa();
const port = process.env.PORT || 8888;

app.use(cors());

// router config
app.use(router.routes());

// start & logger
app.listen(port, () => {
  console.log(`server start success at port ${port}`);
});
