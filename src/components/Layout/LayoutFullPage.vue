<template lang="pug">
	main.layout.flex.flex-col.justify-between
		.layout__header
			Header(:noUser="noUser")
		.layout__content.container.flex.justify-around.items-center
			RouterView
		.layout__footer
			Footer
		NestleToggle
</template>
<script>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
import NestleToggle from '@/components/Elements/NestleToggle.vue'

export default {
	components: {
		Header,
		Footer,
		NestleToggle,
	},
	computed: {
		noUser() {
			return this.$route.name === 'Entry'
		}
	}
}
</script>
<style lang="scss" scoped>
.layout {
	height: 100vh;
	max-height: 100vh;
	overflow: hidden;
}
</style>