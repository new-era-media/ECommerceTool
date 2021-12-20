import axios from 'axios'
const token = localStorage.getItem('userToken')

let headers = {
	'Content-Type': 'application/json'
}
if (token) {
	headers['Authorization'] = `Bearer ${token}`
}

export default new class Api {
	instance = axios.create({
		baseURL: 'https://stag.rest-api.cluster.emonit.ru/api/v1',
		responseType: 'json',
		headers: headers,
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
				if (error.response.status === 401) {
					location.href = '/signin'
				} else {
					return Promise.reject(error.response)
				}
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
