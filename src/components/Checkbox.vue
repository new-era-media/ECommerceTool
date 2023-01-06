<template lang="pug">
	div(class="form-group")
		input(type="checkbox" :id="id" :checked="checked" @change="change(id)")
		label(:for="value")
			span {{ title }}
</template>

<script>
export default {
	name: "Checkbox",
	props: {
		id: {
			type: [String, Number],
		},
		value: {
			type: String,
		},
		title: {
			type: String,
		},
		checked: {
			type: Boolean,
		},
	},
	methods: {
		change(value) {
			this.$emit('change', value)
		}
	}
}
</script>

<style scoped>
.form-group {
	display: block;
}

.form-group input {
	padding: 0;
	height: initial;
	width: initial;
	margin-bottom: 0;
	display: none;
	cursor: pointer;
}

.form-group label {
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: start;
}

.form-group label:before {
	content:'';
	-webkit-appearance: none;
	background-color: transparent;
	border: 2px solid #212121;
	border-radius: 4px;
	padding: 10px;
	display: inline-block;
	position: relative;
	vertical-align: middle;
	cursor: pointer;
	margin-right: 8px;
}

.form-group input:checked + label:after {
	content: '';
	display: block;
	position: absolute;
	top: 2px;
	left: 9px;
	width: 6px;
	height: 14px;
	border: solid #212121;
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}
</style>
