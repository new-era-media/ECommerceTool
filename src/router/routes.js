import LayoutLanding from '../components/Layout/LayoutLanding.vue'
import LayoutFullPage from '../components/Layout/LayoutFullPage.vue'
import Layout from '../components/Layout/Layout.vue'
const _import = name => () => import('@/views/' + name + '.vue')
// eslint-disable-next-line no-unused-vars
import store from '@/store'

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
		path: '/',
		name: 'LayoutFullPage',
		component: LayoutFullPage,
		redirect: { name: 'Welcome' },
		children: [
			{
				path: '/entry',
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
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: { name: 'Dashboard' },
		children: [
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: _import('Dashboard'),
			},
			{
				path: '/category/:id',
				name: 'Category',
				component: _import('Category'),
			},
			{
				path: '/brand',
				name: 'Brand',
				component: _import('Brand'),
				redirect: { name: 'Brand.List' },
				children: [
					{
						path: 'list',
						name: 'Brand.List',
						component: _import('Brand/List'),
					},
					{
						path: 'item',
						name: 'Brand.Item',
						component: _import('Brand/Item'),
					},
				]
			},
			{
				path: '/profile',
				name: 'Profile',
				component: _import('Profile'),
			}
		]
	},
	{ path: '*', redirect: { name: 'PageNotFound' } },
]