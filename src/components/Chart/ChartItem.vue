<template lang="pug">
.chart-item
	.chart-item__title {{title}}
	.chart-item__content
		slot
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.chart-item {
	padding: 16px;
	background-color: color(white);
	border-radius: 8px;

	&__title {
		font-weight: 600;
		color: color(gray-700);
	}
	&__content {
		padding-top: 16px;
		min-height: 400px;
	}
}
</style>