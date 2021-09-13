import LayoutLanding from '../components/Layout/LayoutLanding.vue'
import LayoutFullPage from '../components/Layout/LayoutFullPage.vue'
//import Layout from '../components/Layout/Layout.vue'
const _import = name => () => import('@/views/' + name + '.vue')

export default [
	{
		path: '',
		name: 'LayoutLanding',
		component: LayoutLanding,
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
			{
				path: '/welcome',
				name: 'Welcome',
				component: _import('Welcome'),
			},
		]
	},
	{ path: '*', redirect: { name: 'PageNotFound' } },
]