<template lang="pug">
	main.layout
		.layout__header
			HeaderEntry
		.layout__content
			RouterView
</template>
<script>
import HeaderEntry from '@/components/Layout/HeaderEntry.vue'

export default {
	components: { HeaderEntry },
	computed: {

	}
}
</script>
<style lang="scss" scoped>
.layout {

}
</style>