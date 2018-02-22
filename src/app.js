import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	Router,
	browserHistory
} from 'react-router';

import 'babel-polyfill';

import store from './store';

import './style/index.css';

import AppRoutes from './route';

// 下面是创建根组件
// 其中引入了store,route,browserHistory
// 这里用的是browserHistory,即路由是依靠url地址的变化跳转的（比如www.test.com/home）
// 也可以使用hashHistory,即路由是依靠锚点的变化跳转的(比如www.test.com/#/home)
ReactDOM.render(
	<Provider store={store}>
		<Router routes={AppRoutes} history={browserHistory} queryKey={false}></Router>
	</Provider>,
	document.getElementById('app-root')
);