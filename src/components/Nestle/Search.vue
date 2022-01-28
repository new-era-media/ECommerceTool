<template lang="pug">
	.search.ml-8
		.icon &#x1F50E;&#xFE0E;
		input(type="text" placeholder="UPC, RPC, MPC or Product Description" v-model="model")
</template>

<script>
export default {
	name: "Search",
	props:{
		value: [Number, String]
	},
	data() {
		return {
			model: null,
		};
	},
	watch: {
		value: {
			deep: true,
			immediate: true,
			handler: "copyToLocal",
		},
		model: {
			deep: true,
			handler: "updateExternal",
		},
	},
	methods: {
		copyToLocal() {
			if (JSON.stringify(this.value) === JSON.stringify(this.model)) {
				return;
			}
			this.model = this.value;
		},
		updateExternal() {
			this.$emit("input", this.model);
		},
	}
}
</script>

<style lang="scss" scoped>
	.search {
		position: relative;
		input{
			padding-left: 30px;
			width: 300px;
			border: 1px solid color(gray-400);
			border-radius: 3px;
			z-index: 1;
			&:hover{
				outline: none;
			}
		}
		.icon{
			position: absolute;
			z-index: 2;
			left: 10px;
			top: 1px;
			color: color(gray-600);
		}
	}
</style>
