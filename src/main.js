import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './city'
// 导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入font-awesome(导入就可以直接用了)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// 使用ElementUI
Vue.use(ElementUI);
Vue.use(Vuex)
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
