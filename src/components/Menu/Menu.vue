<template lang="pug">
.menu.container
	.flex.justify-between.items-center
		.menu__title
			slot(name="title")
				| {{ title }}
		slot

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
		min-height: 32px;
		color: color(white);
		font-size: 24px;
		line-height: 1.33;
	}
}
</style>
