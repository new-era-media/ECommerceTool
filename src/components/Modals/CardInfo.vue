<template lang="pug">
	.modal
		.close(@click="close")
			v-icon(color="#424242" size="18") mdi-close
		.modal__title {{ title }}
		.modal__list.mt-4
			ol
				li(v-for="(list, index) in lists" :key="index").mb-1 {{ list }}
		Button.mt-6(@click="close") Закрыть
</template>

<script>
import Button from "@/components/Button/Button";
export default {
	name: "CardInfo",
	components: {Button},
	props: {
		title: {
			type: String,
			required: true,
		},
		lists: {
			type: Array,
			required: true,
		}
	},
	methods: {
		close() {
			this.$emit('close')
		}
	}
}
</script>

<style lang="scss" scoped>
.modal {
	position: relative;
	padding: 34px 40px;
	margin: 24px;
	background-color: #fff;
	.close {
		position: absolute;
		right: 40px;
		top: 40px;
		cursor: pointer;
	}
	&__title {
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		display: flex;
		align-items: center;
		letter-spacing: 0.15px;
		color: #212121;
	}
	&__list {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		display: flex;
		align-items: center;
		letter-spacing: 0.15px;
		color: #000000;
	}
}
</style>
