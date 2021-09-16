<template lang="pug">
.menu.container
	.menu__title {{ title }}
</template>

<script>
export default {
	props: {
		title: String,
	}
}
</script>

<style lang="scss" scoped>
.menu {
	width: 100%;
	padding: 12px 24px;
	background-color: color(gray-800);

	&__title {
		color: color(white);
		font-size: 24px;
		line-height: 1.33;
	}
}
</style>