import React from 'react';
import {
	Route,
	Redirect,
	IndexRedirect
} from 'react-router';

/* 下面是引入一些我们自己定义的container,作为路由的页面 */
// root这个container很重要 我们稍后配置
import RootContainer from '../a_container/root';
import TestContainer from '../a_container/home'; // 一个主页的container
import CarContainer from '../a_container/car';
import MyContainer from '../a_container/my';
import MyRootCon from '../a_container/root/my_root';
import MyHome from '../a_container/my/my_home/';
import MyHouse from '../a_container/my/my_house/';
import MyData from '../a_container/my/my_data/';


export default (
	<Route path="/" component={RootContainer}> 
	    <IndexRedirect to="/home" /> 
	    <Route path="/home" component={TestContainer} /> 
	    <Route path="/car" component={CarContainer} />
	    <Route path="/my" component={MyRootCon}>
	    	<IndexRedirect to="/my/myhome" />
	    	<Route path="/my/myhome" component={MyHome} />
	    	<Route path="/my/myhouse" component={MyHouse} />
	    	<Route path="/my/mydata" component={MyData} />
	    </Route>
	    <Redirect from='*' to='/'  />
	</Route>
);