<template lang="pug">
	main.layout
		.layout__header
			Header(:nav="nav")
		.layout__content
			RouterView
		.layout__footer
			Footer
</template>
<script>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'

export default {
	components: { Header, Footer },
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