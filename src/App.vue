<template lang="pug">
	#app
		RouterView
		ModalService
</template>

<script>
import ModalService from '@/components/Layout/ModalService.vue'

export default {
	name: 'App',
	components: { ModalService }
}
</script>

<style lang="scss">
@import '~@/scss/normalize.css';
@import '~@/scss/main.scss';

#app {
	font-family: OpenSans, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: color(primary);
	font-size: 14px;
	background-color: color(gray-100);
}
</style>
