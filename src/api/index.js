import axios from 'axios'

export default new class Api {
	instance = axios.create({
		baseURL: '/api/v1',
		responseType: 'json',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	constructor () {
		// Register services
		const requireService = require.context('./service', false, /.js$/)

		requireService
				.keys()
				.forEach(filename => {
					const name = /[^.](.+).js$/.exec(filename)[1]

					this[name] = requireService(filename).default(this.instance)
				})

		this.intercept(({ response }) => {

			response.use(response => {

				return response.data
			}, error => {
				return Promise.reject(error.response)
			})
		})
	}

	intercept(fn) {
		fn(this.instance.interceptors)
	}

	install(Vue) {
		Vue.prototype.$api = this
	}
}
