// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入axios
import axios from 'axios'
Vue.prototype.$axios= axios;

Vue.prototype.Interface = Interface
// 公用方法
import base from './assets/js/base.js'
import Interface from './assets/js/Interface.js'
Vue.use(base)
// rem
import 'lib-flexible/flexible'
Vue.config.productionTip = false

// vant
import { Swipe, SwipeItem, Tab, RadioGroup, Radio , Tabs, Icon, NavBar ,Uploader,Popup,Loading ,Area   ,Rate,Checkbox,CheckboxGroup, Collapse, CollapseItem,DatetimePicker,Circle ,PasswordInput, NumberKeyboard ,Step, Steps ,Field , Toast  } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(RadioGroup).use(Radio).use(Tab).use(Tabs).use(Icon).use(NavBar ).use(Area ).use(Loading).use(Uploader).use(Popup).use(Rate ).use(Checkbox ).use(Circle ).use(CheckboxGroup ).use(Collapse).use(CollapseItem).use(DatetimePicker).use(PasswordInput).use(NumberKeyboard).use(Step).use(Steps).use(Field ).use(Toast);
//cookie
import {setCookie,getCookie,delCookie} from '@/assets/js/cookie'
Vue.prototype.$cookieStore = {setCookie,getCookie,delCookie}
// 分享
import vshare from 'vshare'
Vue.use(vshare)
// 地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'a5Eh9hftoGHuqTQVwcSVNyICt4n7qTZ2'
})
// 跳转回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});

import imgYzm from './components/imgYzm/imgYzm'  //注意路径
Vue.use(imgYzm)
// 复制粘贴
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
