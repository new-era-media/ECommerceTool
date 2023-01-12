<template lang="pug">
	.slot.d-flex.justify-center
		.form.d-flex.flex-column.align-center.justify-center
			.form__label Добро пожаловать
			.form__input.mt-8.px-2
				v-text-field(
					v-model="name"
					outlined
					hide-details
					label="Фамилия и имя" dense)
			.form__button.mt-6
				Button(@click="use" :disabled="!name.length") Сохранить
</template>

<script>
import AuthLayout from "@/components/Layout/AuthLayout";
import Button from "@/components/Button/Button";

export default {
	name: "EnterName",
	components: {AuthLayout, Button},
	data() {
		return {
			name: ''
		}
	},
	methods: {
		use() {
			this.$router.push({path: '/'})
		}
	},
}
</script>

<style lang="scss" scoped>
.slot {
	height: 100%;
}
.form {
	max-width: 320px;
	width: 100%;
	height: 100%;
	&__label {
		font-style: normal;
		text-align: center;
		font-weight: 400;
		font-size: 24px;
		line-height: 29px;
		letter-spacing: 0.15px;
	}
	&__input {
		width: 100%;
	}
}
</style>
