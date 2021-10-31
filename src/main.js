import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// pluguins
import VCalendar from 'v-calendar'

Vue.use(Api)
Vue.use(VCalendar)
Vue.use(Toast, {
	transition: 'Vue-Toastification__fade',
	hideProgressBar: false,
	showCloseButtonOnHover: true,
	toastClassName: 'ecomm-toast',
})

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