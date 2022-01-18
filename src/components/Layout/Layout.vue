<template lang="pug">
	main.layout
		.layout__content
			RouterView
		.layout__footer
			Footer
		NestleToggle
</template>
<script>
import Footer from '@/components/Layout/Footer.vue'
import NestleToggle from '@/components/Elements/NestleToggle.vue'

export default {
	components: {
		Footer,
		NestleToggle,
	},
}
</script>
<style lang="scss" scoped>
.layout {
	min-height: 100vh;

	&__content {
		min-height: calc(100vh - 66px); // 66px - footer height
	}
}
</style>