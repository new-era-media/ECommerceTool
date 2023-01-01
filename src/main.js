import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from './api'
import VueBus from 'vue-bus'
import 'vue-toastification/dist/index.css'

// plugins
import Skelenton from 'vue-loading-skeleton'
import VCalendar from 'v-calendar'
import Toast from 'vue-toastification'

Vue.use(VueBus)
Vue.use(Api)

Vue.use(Skelenton)
Vue.use(VCalendar)
Vue.use(Toast, {
	transition: 'Vue-Toastification__fade',
	hideProgressBar: false,
	showCloseButtonOnHover: true,
	toastClassName: 'ecomm-toast',
})

Vue.config.productionTip = false

import '@/plugins/modal'
import vuetify from './plugins/vuetify'

(async () => {


	let app = new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app')

	await store.dispatch('app/prepare')

	global.vm = app
	Vue.config.devtools = true
})()
