/*
 * games about async request
 * @Author: JiangBao-jiangbao1123@gmail.com
 * @Date: 2018-02-28 17:28:01
 * @Last Modified by: JiangBao-jiangbao1123@gmail.com
 * @Last Modified time: 2018-02-28 17:37:03
 */
import URLS from '../config/urls';
import * as fetch from './fetch';

export const getGamesHome = () => fetch.get(URLS.GAMES_HOME);
