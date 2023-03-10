// eslint-disable-next-line no-unused-vars
import api from '@/api'

export default {
	namespaced: true,
	state: {
		userToken: '',
		user: null,
		nestleConfig: null,
	},
	getters: {
		getNestleConfig(state) {
			return state.nestleConfig
		},
	},

	mutations: {
		setUser(state, user) {
			state.user = user
		},
		setToken(state, userToken) {
			state.userToken = userToken
		},
		setNestleConfig(state, flag) {
			state.nestleConfig = flag
		},
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
		async logout({ commit }, params) {
			localStorage.removeItem('userToken')
			if (!params.silent) {
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
			try  {
				this._vm.$progress.start()
				const user = await api.common.getUserInfo()
				commit('setUser', user)

				commit('setNestleConfig', localStorage.getItem('nestleConfig'))

				this._vm.$progress.stop()
			} catch (error) {
				if (error?.code === 401) {
					localStorage.removeItem('userToken')
				}
				this._vm.$progress.fail()
			}
		},

		toggleNestleConfig({ state }) {
			if (state.nestleConfig) {
				localStorage.removeItem('nestleConfig')
				location.href = '/'
			} else {
				localStorage.setItem('nestleConfig', '1')
				location.href = '/nestle/'
			}

			// commit('setNestleConfig', !state.nestleConfig)
		},
	},
}
