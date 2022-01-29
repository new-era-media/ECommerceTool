import CatLayout from '../components/Layout/CatLayout.vue'
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
		name: 'CatLayout',
		component: CatLayout,
		redirect: { name: 'Index' },
		children: [
			{
				path: '/',
				name: 'Index',
				component: _import('Index'),
			},

		]
	},
	{
		path: '/',
		name: 'LayoutLanding',
		component: LayoutLanding,
		redirect: { name: 'SignIn' },
		children: [
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
		redirect: { name: 'Nestle.KPIDashboard' },
		children: [
			{
				path: '/',
				name: 'Nestle.KPIDashboard',
				component: _import('Nestle/KPIDashboard'),
			},
			{
				path: 'portfolio-availability',
				name: 'Nestle.PortfolioAvailability',
				component: _import('Nestle/PortfolioAvailability'),
			},
			{
				path: 'share-of-search',
				name: 'Nestle.ShareOfSearch',
				component: _import('Nestle/ShareOfSearch'),
			},
			{
				path: 'ratings-and-reviews',
				name: 'Nestle.RatingsAndReviews',
				component: _import('Nestle/RatingsAndReviews'),
			},
			{
				path: 'share-of-taxonomy',
				name: 'Nestle.ShareOfTaxonomy',
				component: _import('Nestle/ShareOfTaxonomy'),
			}			,
			{
				path: 'product-details',
				name: 'Nestle.ProductDetails',
				component: _import('Nestle/ProductDetails'),
			}
		]

	},
	{ path: '*', redirect: { name: 'PageNotFound' } },
]
