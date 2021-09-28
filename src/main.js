import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/plugins/modal'

new Vue({
	router,
	store,
    render: h => h(App),
}).$mount('#app')

Vue.config.devtools = true