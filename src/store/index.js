import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const modules = (() => {
	const requireComponent = require.context('./modules', true, /^[^_].+\.js$/i)

	return requireComponent
			.keys()
			.reduce((_modules, filename) => {
				const componentConfig = requireComponent(filename)

				const name = /[^.](.+).js$/.exec(filename)[1]

				_modules[name] = componentConfig.default || componentConfig

				return _modules
			}, {})

})()

const plugins = [
	createPersistedState({
		paths: ['storage'],
	}),
]

export default new Vuex.Store({ modules, plugins })
