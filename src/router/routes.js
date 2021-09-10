import Layout from '../components/Layout/Layout.vue'
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
				path: '/not-found',
				name: 'PageNotFound',
				component: _import('Error/PageNotFound'),
			},
		]
	},
	{ path: '*', redirect: { name: 'PageNotFound' } },
]