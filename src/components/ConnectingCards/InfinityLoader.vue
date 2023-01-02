<template lang="pug">
	.linePreloader-flat
</template>

<script>
export default {
	name: "InfinityLoader"
}
</script>

<style lang="scss" scoped>
.linePreloader-flat {
	width: 100%;
	height: 8px;
	background-color: #E9E9EB;
	border-radius: 4px;
	position: relative;
	overflow: hidden;

	&:before {
		content: '';
		background: #0069FF;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		border-radius: 4px;
		animation: 150s flat forwards;
	}
}

@keyframes flat {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(-2%);
	}
}
</style>
