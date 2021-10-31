export default ({ get, post }) => ({
	getUserInfo() {
		return get('/account')
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

})