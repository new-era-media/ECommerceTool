<template lang="pug">
	.element-container
		.element-container__title.flex.items-center
			.element-container__title-left
				slot(name="header-left")
			.element-container__title-right
				slot(name="header-right")
		.element-container__content.flex.items-center.justify-center
			slot(name="data")
</template>

<script>
export default {
	name: "ContainerForData"
}
</script>

<style lang="scss" scoped>
.element-container{
	position: relative;
	width: 600px;
	border: 3px color(gray-400) solid;
	background-color: white;
	border-radius: 2px;
	&__title{
		width: 100%;
		height: 40px;
		border-radius: 3px 3px 0 0;
		background-color: color(gray-200);
		border-bottom: 1px color(gray-400) solid;
		padding-left: 10px;
		p {
			font-weight: 600;
			color: color(gray-700);
		}
		&-right{
			margin-left: auto;
			margin-right: 10px;
		}
	}
	&__content{
		width: 100%;
		padding: 20px;
	}
}
</style>