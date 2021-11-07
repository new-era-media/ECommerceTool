<template lang="pug">
.category
	Header(:nav="nav")
	template(v-if="loading")
		| Loading...
	template(v-else)
		RouterView(:key="id" :categories="categories")
</template>
<script>
import Header from '@/components/Layout/Header.vue'

export default {
	components: {
		Header,
	},
	data() {
		return {
			loading: true,
			categories: [],
		}
	},
	computed: {
		id() {
			return parseInt(this.$route.params.id)
		},
		nav() {
			if (this.$route.name === 'Category.Settings') {
				return [
					{
						page: 'category',
						title: 'Настройки категории',
						active: true,
					}
				]
			} else {
				return [
					{
						page: 'dashboard',
						title: 'Дашборд',
						active: this.$route.name === 'Category.Dashboard',
						link: {
							name: 'Category.Dashboard',
							params: {
								id: this.id
							}
						},
					},
					{
						page: 'brand',
						title: 'SKU брендов',
						active: this.$route.name === 'Category.Brand.List' || this.$route.name === 'Category.Brand.Item',
						link: {
							name: 'Category.Brand.List',
							params: {
								id: this.id
							}
						},
					},
					{
						page: 'category',
						title: 'Настройки категории',
						active: this.$route.name === 'Category.Settings',
						link: {
							name: 'Category.Settings',
							params: {
								id: this.id
							}
						},
					},
				]
			}
		}
	},
	mounted() {
		this.fetch()
	},
	methods: {
		async fetch() {
			try {
				const resp = await this.$api.common.getCategoryList()
				if (resp) {
					this.categories = resp
				}
				this.loading = false
			} catch(error) {
				let err = error ? error.data.message : 'Произошла ошибка, попробуйте позже'
				this.$toast.error(err)
			}
		},
	}
}
</script>

<style lang="scss" scoped>
.category {

}
</style>