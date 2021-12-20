import Vue from 'vue'
import { castArray } from 'lodash'

export const guid = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		// eslint-disable-next-line
		let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
	})
}

Vue.prototype.$utils = {
	formatNumber(num) {
		return (num).toLocaleString('ru')
	},
	isENV(env) {
		return process.env.NODE_ENV === env
	}
}
Vue.prototype.$progress = {
	start: () => Vue.prototype.$bus.$emit('progress:start'),
	stop: () => Vue.prototype.$bus.$emit('progress:stop'),
	fail: () => Vue.prototype.$bus.$emit('progress:fail'),
	async wait(promiseArray) {
		this.start()
		try {
			await Promise.all(castArray(promiseArray))
		} catch (e) {
			this.fail()
		} finally {
			this.stop()
		}
	},
}
