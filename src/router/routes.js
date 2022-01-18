import LayoutLanding from '../components/Layout/LayoutLanding.vue'
import LayoutFullPage from '../components/Layout/LayoutFullPage.vue'
import Layout from '../components/Layout/Layout.vue'
import NestleLayout from '../components/Nestle/Layout/Layout.vue'
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
		redirect: { name: 'Category' },
		children: [
			{
				path: 'category/:id',
				name: 'Category',
				component: _import('Category'),
				redirect: { name: 'Category.Settings' },
				children: [
					{
						path: 'settings',
						name: 'Category.Settings',
						component: _import('Settings'),
					},
					{
						path: 'dashboard',
						name: 'Category.Dashboard',
						component: _import('Dashboard'),
					},
					{
						path: 'brand',
						name: 'Category.Brand',
						component: _import('Brand'),
						redirect: { name: 'Category.Brand.List' },
						children: [
							{
								path: 'list',
								name: 'Category.Brand.List',
								component: _import('Brand/List'),
							},
							{
								path: 'item/:brandId',
								name: 'Category.Brand.Item',
								component: _import('Brand/Item'),
							},
						]
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
	{
		path: '/nestle',
		name: 'NestleLayout',
		component: NestleLayout,
		redirect: { name: 'Nestle.Index' },
		children: [
			{
				path: '/',
				name: 'Nestle.Index',
				component: _import('Nestle/Index'),
			}
		]

	},
	{ path: '*', redirect: { name: 'PageNotFound' } },
]