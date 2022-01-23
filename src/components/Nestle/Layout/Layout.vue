<template lang="pug">
	main.layout
		.layout__content
			RouterView
		NestleToggle
</template>

<script>
import NestleToggle from '@/components/Elements/NestleToggle.vue'

export default {
	components: {
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