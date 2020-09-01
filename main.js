import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'http://118.25.0.131:89';

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()