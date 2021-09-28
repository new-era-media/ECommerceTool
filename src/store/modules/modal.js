export default {
	namespaced: true,
	state: {
		modals: [],
	},

	mutations: {
		openModal(state, modal) {
			state.modals.push(modal)
			document.body.classList.add('--overlay')
		},
		closeModal(state, uid) {
			state.modals.splice(state.modals.findIndex(item => item._uid === uid))

			if(!state.modals.length) {
				document.body.classList.remove('--overlay')
			}
		},
		closeTopModal(state, next) {
			if(state.modals.length) {
				state.modals.splice(0, 1)
				next(false)
			} else {
				next()
			}
		},
		closeAllModals(state) {
			state.modals = []
			document.body.classList.remove('--overlay')
		},
	},
}
