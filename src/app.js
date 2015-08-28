
require('./css/common.css');//加载公共样式

var Vue = require('vue');
var VueRouter = require('vue-router');
console.log(1);
var routerConfig = require('./route-config');
Vue.use(VueRouter);


var router = new VueRouter(
	{
		history: true,
		saveScrollPosition: true
	}	//开启此模式需要服务端设置
);

routerConfig(router);

var App = Vue.extend(require('./app.vue'));
router.start(App,'#app');

