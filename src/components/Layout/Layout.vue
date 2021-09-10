<template lang="pug">
	main.layout
		.layout__header
			Header
		.layout__content
			RouterView
</template>
<script>
import Header from '../../components/Layout/Header.vue'

export default {
	components: { Header }
}
</script>
<style lang="scss" scoped>
.layout {

}
</style>