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
		async login({ commit }, params) {
			const { token } = await api.common.login(params)
			if (token) {
				localStorage.setItem('userToken', token)
				commit('setToken', token)
				return { success: true }
			} else {
				return { success: false }
			}
		},
		async logout({ commit }, obj) {
			localStorage.removeItem('userToken')
			if (!obj.silent) {
				location.href = '/'
			}
			commit('setUser', null)
		},
		async fetchUser({ commit }) {
			const user = await api.common.getUserInfo()
			if (user) {
				commit('setUser', user)
			}
		},
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
