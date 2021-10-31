import api from '@/api'

export default {
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
			debugger
			const user = await api.common.getUserInfo()
			commit('setUser', user)
		},
	},
}