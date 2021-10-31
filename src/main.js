import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api'

// pluguins
import VCalendar from 'v-calendar'

Vue.use(Api)
Vue.use(VCalendar)

Vue.config.productionTip = false

import '@/plugins/modal'

(async () => {
	await store.dispatch('app/prepare')

	let app = new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app')

	global.vm = app
	Vue.config.devtools = true
})()