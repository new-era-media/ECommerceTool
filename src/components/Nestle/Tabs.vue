<template lang="pug">
	.flex
		.input(v-for="(item, i) in tabs" :class="typeTab")
			//span {{ typeTab }}
			input(:id="`test${i}`" type="radio" :value="item.value" v-model="model")
			label(:for="`test${i}`") {{ item.title }}
</template>

<script>
export default {
	name: "Tabs",
	props:{
		tabs: {
			type: Array,
			required: true
		},
		value: [Number, String],
		typeTab: {
			type: String,
			validator: value => ~[
				'tabs', 'table-tabs',
			].indexOf(value),
		}
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
[type="radio"]{
	display: none;
}
.table-tabs{
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
}

.tabs{
	[type="radio"] + label, [type="radio"]:checked + label{
		padding: 5px 5px;
		color: color(gray-700);
		border-bottom: 2px color(gray-300) solid;
		margin-right: 8px;
	}

	[type="radio"]:checked  + label{
		border-bottom: 2px color(gray-500) solid;
	}
}


</style>
