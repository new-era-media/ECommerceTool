<template lang="pug">
	.badge {{ text }}
</template>

<script>
export default {
	name: "Badge",
	props:{
		text: String
	},
}
</script>

<style lang="scss" scoped>
.badge{
	padding: 5px;
	color: white;
	background-color: color(green);
	border-radius: 3px;
}
</style>