export default {
	state: {
		// user: null,
		user: {
			name: 'Test Test'
		}
	},
	getters: {
	},

	mutations: {
		setUser(state, user) {
			state.user = user
		},
	},
	actions: {
		// async init({ state, dispatch, commit }) {
		// 	const user = await api.common.getUserInfo()
		// 	commit('setUser', user)
		// },
	},
}