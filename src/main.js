import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import ElementUI from 'element-ui';
import toast from 'components/common/toast'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI)
Vue.use(toast)
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
axios.default.baseURL = "https://localhost:8080"
Vue.prototype.$http = axios
new Vue({
    router,
    store,
    render: function(h) { return h(App) }
}).$mount('#app')