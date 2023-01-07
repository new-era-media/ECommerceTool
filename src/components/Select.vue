<template lang="pug">
	Tooltip(trigger="click" append-to-body)
		template(slot="reference")
			.d-flex.items-center.justify-center
				span.text {{ value || placeholder }}
				v-icon mdi-chevron-down
		.lists
			.list(v-for="list in lists" @click="check(list.value)") {{ list.title }}

</template>

<script>
import Tooltip from "@/components/Elements/Tooltip";
export default {
	name: "Select",
	components: {Tooltip},
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
	methods: {
		check(value) {
			this.$emit('input', value)
		}
	}
}
</script>

<style lang="scss" scoped>
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
