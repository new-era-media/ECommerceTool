<template lang="pug">
	v-menu(ref='menu' v-model='menu' :close-on-content-click="false" offset-y)
		template(v-slot:activator='{ on, attrs }')
			.d-flex.items-center.justify-center(v-bind="attrs" v-on="on")
				v-icon(size="16") {{ icon }}
				span.text {{ placeholder }}
				v-icon mdi-chevron-down
		.lists(@input='menu = false')
			.list(v-for="list in lists")
				Checkbox(:value="list.value" :id="list.value" :checked="!!list.checked" :title="list.title" @change="change(list.value)")


</template>

<script>
import Checkbox from "@/components/Checkbox";
export default {
	name: "MultiSelect",
	components: {Checkbox},
	props: {
		value: {
			type: Array,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: '',
		},
		lists: {
			type: Array,
			required: true,
		}
	},
	data() {
		return {
			menu: false
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
	}
}
</script>

<style lang="scss" scoped>
.lists {
	background-color: #fff;
}
.text {
	font-family: 'Montserrat';
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
</style>
