// eslint-disable-next-line no-unused-vars
import api from '@/api'

export default {
	namespaced: true,
	state: {
		user: null,
	},
	getters: {
	},

	mutations: {
		setUser(state, user) {
			state.user = user
		},
	},
	actions: {
		// eslint-disable-next-line no-unused-vars
		async prepare({ state, dispatch, commit }) {
			// const user = await api.common.getUserInfo()
			// commit('setUser', user)
		},
	},
}