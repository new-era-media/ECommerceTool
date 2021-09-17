<template lang="pug">
	main.layout
		.layout__header
			Header(:nav="nav")
			Menu(:title="title")
		.layout__content
			RouterView
		.layout__footer
			Footer
</template>
<script>
import Header from '@/components/Layout/Header.vue'
import Menu from '@/components/Layout/Menu.vue'
import Footer from '@/components/Layout/Footer.vue'

export default {
	components: { Header, Menu, Footer },
	data() {
		return {
			nav: [
				{
					page: 'category',
					title: 'Настройки категории',
					active: true,
				}
			]
		}
	},
	computed: {
		title() {
			return this.$route.name.toLowerCase() === 'dashboard' ? 'Дашборд' : 'Настройки категории Кофе в зернах'
		}
	}
}
</script>
<style lang="scss" scoped>
.layout {
	min-height: 100vh;

	&__content {
		min-height: calc(100vh - 84px - 66px); // 84px -header height, 66px - footer height
	}
}
</style>