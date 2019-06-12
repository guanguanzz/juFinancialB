import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//饿了么
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/scss/reset.scss' //reset 样式
import '@/assets/scss/iconFont/iconfont.css'
import * as filters from '@/filters/Operat.js'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
