<template lang="pug">
	main.layout
		.layout__content
			RouterView
		.layout__footer
			Footer
</template>
<script>
import Footer from '@/components/Layout/Footer.vue'

export default {
	components: { Footer },
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