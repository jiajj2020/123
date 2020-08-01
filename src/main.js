import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 导入font-awesome(导入就可以直接用了)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// 使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
