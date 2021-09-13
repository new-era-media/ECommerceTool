<template lang="pug">
	main.layout
		.layout__header(v-if="!noHeader")
			HeaderLanding
		.layout__content
			RouterView
</template>
<script>
import HeaderLanding from '@/components/Layout/HeaderLanding.vue'

export default {
	components: { HeaderLanding },
	computed: {
		noHeader() {
			return this.$route.meta.noHeader
		}
	}
}
</script>
<style lang="scss" scoped>
.layout {

}
</style>