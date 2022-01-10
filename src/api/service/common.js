export default ({ get, post, put }) => ({
	getUserInfo() {
		return get('/account')
	},
	editUserInfo(params) {
		return put('/account', params)
	},
	login(params) {
		return post('/security/login', params)
	},
	request(params) {
		return post('/security/request', params)
	},
	getCategoryList() {
		return get('/category/all')
	},
	getCategory(categoryId) {
		return get(`/category/${categoryId}`)
	},
	getCategorySettings(categoryId) {
		return get(`/settings/category/${categoryId}`)
	},
	editCategorySettings(categoryId, params) {
		return put(`/settings/category/${categoryId}`, params)
	},
	getSettingsWidgetList(categoryId) {
		return get(`/settings/category/${categoryId}/widgets`)
	},
	editSettingsWidgetList(categoryId, params) {
		return put(`/settings/category/${categoryId}/widgets`, params)
	},
	getWidgetSpecific(params) {
		console.log(params)
		return get(`/widget/${params.widgetId}/category/${params.categoryId}/brands/specific`, params)
	},
	getWidgetComparison(params) {
		return get(`/widget/${params.widgetId}/category/${params.categoryId}/brands/comparison`, params)
	},
	getSettingsChartList(categoryId) {
		return get(`/settings/category/${categoryId}/charts`)
	},
	editSettingsChartList(categoryId, params) {
		return put(`/settings/category/${categoryId}/charts`, params)
	},
	getChartSpecific(params) {
		return get(`/chart/${params.chartId}/category/${params.categoryId}/brands/specific`, params)
	},
	getChartComparison(params) {
		return get(`/chart/${params.chartId}/category/${params.categoryId}/brands/comparison`, params)
	},
	getBrandList(categoryId) {
		return get(`/sku/brand/all/category/${categoryId}`)
	},
	getBrandItem(categoryId) {
		return get(`/sku/brand/category/${categoryId}`)
	}
})