
import AuthLayout from '@/components/Layout/AuthLayout'
const _import = name => () => import('@/views/' + name + '.vue')

export default [
	{
		path: '/',
		name: 'AuthLayout',
		component: AuthLayout,
		redirect: { name: 'Analytics' },
		children: [
			{
				path: '/analytics',
				name: 'Analytics',
				component: _import('Analytics'),
			},
			{
				path: '/connecting',
				name: 'Connecting',
				component: _import('СonnectingMarketplace'),
			},
		]
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
		path: '/enter-name',
		name: 'EnterName',
		component: _import('EnterName'),
		meta: {
			microHeader: true,
		},
	},
	// {
	// 	path: '/analytics',
	// 	name: 'Analytics',
	// 	component: _import('Analytics'),
	// },
	// {
	// 	path: '/connecting',
	// 	name: 'Connecting',
	// 	component: _import('СonnectingMarketplace'),
	// },
	// { path: '*', redirect: { name: 'PageNotFound' } },
	// {
	// 	path: '/',
	// 	name: 'LayoutFullPage',
	// 	component: LayoutFullPage,
	// 	redirect: { name: 'Welcome' },
	// 	children: [
	// 		{
	// 			path: '/entry',
	// 			name: 'Entry',
	// 			component: _import('Entry'),
	// 		},
	// 		{
	// 			path: '/welcome',
	// 			name: 'Welcome',
	// 			component: _import('Welcome'),
	// 		},
	// 	]
	// },
	// {
	// 	path: '/',
	// 	name: 'Layout',
	// 	component: Layout,
	// 	redirect: { name: 'Category' },
	// 	children: [
	// 		{
	// 			path: 'category/:id',
	// 			name: 'Category',
	// 			component: _import('Category'),
	// 			redirect: { name: 'Category.Settings' },
	// 			children: [
	// 				{
	// 					path: 'settings',
	// 					name: 'Category.Settings',
	// 					component: _import('Settings'),
	// 				},
	// 				{
	// 					path: 'dashboard',
	// 					name: 'Category.Dashboard',
	// 					component: _import('Dashboard'),
	// 				},
	// 				{
	// 					path: 'brand',
	// 					name: 'Category.Brand',
	// 					component: _import('Brand'),
	// 					redirect: { name: 'Category.Brand.List' },
	// 					children: [
	// 						{
	// 							path: 'list',
	// 							name: 'Category.Brand.List',
	// 							component: _import('Brand/List'),
	// 						},
	// 						{
	// 							path: 'item/:brandId',
	// 							name: 'Category.Brand.Item',
	// 							component: _import('Brand/Item'),
	// 						},
	// 					]
	// 				},
	// 			]
	// 		},
	// 		{
	// 			path: '/profile',
	// 			name: 'Profile',
	// 			component: _import('Profile'),
	// 		}
	// 	]
	// },
	// {
	// 	path: '/nestle',
	// 	name: 'NestleLayout',
	// 	component: NestleLayout,
	// 	redirect: { name: 'Nestle.KPIDashboard' },
	// 	children: [
	// 		{
	// 			path: '/',
	// 			name: 'Nestle.KPIDashboard',
	// 			component: _import('Nestle/KPIDashboard'),
	// 		},
	// 		{
	// 			path: 'portfolio-availability',
	// 			name: 'Nestle.PortfolioAvailability',
	// 			component: _import('Nestle/PortfolioAvailability'),
	// 		},
	// 		{
	// 			path: 'share-of-search',
	// 			name: 'Nestle.ShareOfSearch',
	// 			component: _import('Nestle/ShareOfSearch'),
	// 		},
	// 		{
	// 			path: 'ratings-and-reviews',
	// 			name: 'Nestle.RatingsAndReviews',
	// 			component: _import('Nestle/RatingsAndReviews'),
	// 		},
	// 		{
	// 			path: 'share-of-taxonomy',
	// 			name: 'Nestle.ShareOfTaxonomy',
	// 			component: _import('Nestle/ShareOfTaxonomy'),
	// 		},
	// 		{
	// 			path: 'product-details',
	// 			name: 'Nestle.ProductDetails',
	// 			component: _import('Nestle/ProductDetails'),
	// 		},
	// 		{
	// 			path: 'taxonomy-placement',
	// 			name: 'Nestle.TaxonomyPlacement',
	// 			component: _import('Nestle/TaxonomyPlacement'),
	// 		}
	// 	]
	//
	// },
]
