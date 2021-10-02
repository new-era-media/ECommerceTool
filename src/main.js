import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// pluguins
import VCalendar from 'v-calendar'

Vue.use(VCalendar)

Vue.config.productionTip = false

import '@/plugins/modal'

new Vue({
	router,
	store,
    render: h => h(App),
}).$mount('#app')

Vue.config.devtools = true