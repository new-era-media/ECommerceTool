<template lang="pug">
	.flex
		.input(v-for="(item, i) in tabs")
			input(:id="`test${i}`" type="radio" :value="item.value" v-model="model")
			label(:for="`test${i}`") {{ item.title }}
</template>

<script>
export default {
	name: "Tabs.vue",
	props:{
		tabs: {
			type: Array,
			required: true
		},
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
			this.$emit("input", this.model );
		},
	},
}
</script>

<style lang="scss" scoped>
.inputs{
	&:first-child{
		border-radius: 3px 0 0 3px;
	}

	&:last-child{
		border-radius: 0 3px 3px 0;
	}
}
[type="radio"]{
	display: none;
}
[type="radio"] + label, [type="radio"]:checked + label{
	background-color: #fff;
	padding: 5px 5px;
	border-radius: 3px;
	color: color(gray-700);
	border: 1px color(gray-400) solid;
}
[type="radio"]:checked  + label{
	-webkit-box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.1) inset;
	-moz-box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.1) inset;
	box-shadow: 0px 0px 10px 3px rgba(34, 60, 80, 0.1) inset;
}
</style>