import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// Dynamic base path for lang support
export const getBasePath = () => {
	return '/'
}

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	// base: process.env.VUE_APP_BASE_URL,
	base: getBasePath(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	},
})

router.beforeResolve((to, from, next) => {
	const allow = to.meta.ourIp
			? Vue.prototype.$ourIp.enabled || { name: 'PageNotFound' }
			: true

	next(allow)
})

export default router
