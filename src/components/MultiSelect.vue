<template lang="pug">
	Tooltip(trigger="click" append-to-body)
		template(slot="reference")
			.d-flex.items-center.justify-center
				span.title {{ placeholder }}
				v-icon mdi-chevron-down
		.lists
			.list(v-for="list in lists")
				div(class="form-group")
					input(type="checkbox" :id="list.value" :checked="check()" @change="change(list.value)")
					label(:for="list.value")
						span {{ list.title }}


</template>

<script>
import Tooltip from "@/components/Elements/Tooltip";
export default {
	name: "MultiSelect",
	components: {Tooltip},
	props: {
		value: {
			type: Array,
			required: true,
		},
		placeholder: {
			type: String,
			required: true,
		},
		lists: {
			type: Array,
			required: true,
		}
	},
	methods: {
		check(item) {
			return this.value.includes(item)
		},
		change(item) {
			const includes = this.value.includes(item)
			const index = this.value.findIndex(el => el === item)
			includes ? this.value.splice(index, 1) : this.value.push(item)
		},
		upd(value) {
			this.$emit('input', value)
		}
	}
}
</script>

<style lang="scss" scoped>
.title {
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	display: flex;
	align-items: center;
	letter-spacing: 0.25px;
	color: #212121;
}
.list {
	padding: 16px;
	cursor: pointer;
	&:hover{
		color: #FA4860;
		background: rgba(250, 72, 96, 0.05);
	}
}
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
