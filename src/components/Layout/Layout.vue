<template lang="pug">
	main.layout
		.layout__header
			Header
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
	computed: {

	}
}
</script>
<style lang="scss" scoped>
.layout {

}
</style>