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
	getWidgetSpecific(widgetId, categoryId) {
		return get(`/widget/${widgetId}/category/${categoryId}/brands/specific`)
	},
	getWidgetComparison(widgetId, categoryId) {
		return get(`/widget/${widgetId}/category/${categoryId}/brands/comparison`)
	},
})