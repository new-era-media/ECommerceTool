<template lang="pug">
	main.layout
		Header
		.layout__content
			RouterView
		NestleToggle
</template>

<script>
import NestleToggle from '@/components/Elements/NestleToggle.vue'
import Header from '@/components/Nestle/Layout/Header.vue'

export default {
	components: {
		Header,
		NestleToggle,
	},
}
</script>

<style lang="scss">
.layout {
	min-height: 100vh;
	background-color: color(gray-200);
}
</style>