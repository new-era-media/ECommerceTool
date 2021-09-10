<template lang="pug">
	#app
		RouterView

</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import '~@/scss/normalize.css';
@import '~@/scss/main.scss';

#app {
	font-family: OpenSans, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 14px;
	background-color: #fafafa;
}
</style>
