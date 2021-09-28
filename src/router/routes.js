import LayoutLanding from '../components/Layout/LayoutLanding.vue'
import LayoutFullPage from '../components/Layout/LayoutFullPage.vue'
import Layout from '../components/Layout/Layout.vue'
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
	{
		path: '/category',
		name: 'Layout',
		component: Layout,
		redirect: { name: 'Category' },
		children: [
			{
				path: '/',
				name: 'Category',
				component: _import('Category'),
			},
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: _import('Dashboard'),
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