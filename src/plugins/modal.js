import Vue from 'vue'
import store from '@/store'
import { guid } from './index'

Vue.prototype.$modal = ({ component, props, on }) => {
	store.commit('modal/openModal', {
		_uid: guid(),
		component: () => import('@/components/Modals/' + component + '.vue'),
		props,
		on,
	})
}
