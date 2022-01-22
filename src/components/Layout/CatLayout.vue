<template lang="pug">
	main.layout
		.layout__header
			CatHeader
		.layout__content
			RouterView
		NestleToggle
</template>
<script>
import CatHeader from '@/components/Layout/CatHeader.vue'
import NestleToggle from '@/components/Elements/NestleToggle.vue'

export default {
	components: {
		CatHeader,
		NestleToggle,
	},
}
</script>
<style lang="scss" scoped>
.layout {

}
</style>