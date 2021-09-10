import Layout from '../components/Layout/Layout.vue'
import LayoutFullPage from '../components/Layout/LayoutFullPage.vue'
const _import = name => () => import('@/views/' + name + '.vue')

export default [
	{
		path: '',
		name: 'Layout',
		component: Layout,
		redirect: { name: 'Index' },
		children: [
			{
				path: '/',
				name: 'Index',
				component: _import('Index'),
			},
			{
				path: '/signin',
				name: 'SignIn',
				component: _import('SignIn'),
				meta: {
					noHeader: true,
				},
			},
			{
				path: '/request',
				name: 'Request',
				component: _import('Request'),
				meta: {
					noHeader: true,
				},
			},
			{
				path: '/not-found',
				name: 'PageNotFound',
				component: _import('Error/PageNotFound'),
			},
		]
	},
	{
		path: '/entry',
		name: 'LayoutFullPage',
		component: LayoutFullPage,
		redirect: { name: 'Entry' },
		children: [
			{
				path: '/',
				name: 'Entry',
				component: _import('Entry'),
			},
		]
	},
	{ path: '*', redirect: { name: 'PageNotFound' } },
]