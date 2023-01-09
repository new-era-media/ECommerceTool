<template lang="pug">
	v-menu(ref='menu' v-model='menu' :close-on-content-click="false" offset-y)
		template(v-slot:activator='{ on, attrs }')
			.d-flex.items-center.justify-center(v-bind="attrs" v-on="on")
				span.text {{ value || placeholder }}
				v-icon mdi-chevron-down
		.lists(@input='menu = false')
			.list(v-for="list in lists" @click="check(list.value)") {{ list.title }}

</template>

<script>
export default {
	name: "Select",
	props: {
		value: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: 'Выберите значение',
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
		check(value) {
			this.$emit('input', value)
		}
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
