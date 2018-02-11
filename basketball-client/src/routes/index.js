/*
 * routes entry
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-11 11:09:45
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-11 15:33:56
 */
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import News from '../containers/news';
import Ranks from '../containers/ranks';
import Games from '../containers/games';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={News} />
    <Route exact path="/news" component={News} />
    <Route exact path="/games" component={Games} />
    <Route exact path="/ranks" component={Ranks} />
  </Switch>
);

export default Routes;
