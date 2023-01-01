<template lang="pug">
	v-app#app
		ProgressBar
		RouterView
		ModalService
</template>

<script>
import ProgressBar from '@/components/Elements/ProgressBar'
import ModalService from '@/components/Layout/ModalService.vue'

export default {
	name: 'App',
	components: {
		ProgressBar,
		ModalService,
	},
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
	line-height: 1.42;
	background-color: color(gray-100);
}
</style>
