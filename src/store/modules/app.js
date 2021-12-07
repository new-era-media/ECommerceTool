// eslint-disable-next-line no-unused-vars
import api from '@/api'

export default {
	namespaced: true,
	state: {
		userToken: '',
		user: null,
	},
	getters: {
	},

	mutations: {
		setUser(state, user) {
			state.user = user
		},
		setToken(state, userToken) {
			state.userToken = userToken
		}
	},
	actions: {
		// eslint-disable-next-line no-unused-vars
		async prepare({ state, dispatch, commit }) {
			// try  {
			// 	const user = await api.common.getUserInfo()
			// 	commit('setUser', user)
			// } catch (error) {
			// 	if (error?.code === 401) {
			// 		localStorage.removeItem('userToken')
			// 	}
			// }
		},
	},
}