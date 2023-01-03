<template lang="pug">
	.form
		.form__title Код из СМС
		.form__subtitle.mt-6 На Ваш номер +7 906 772-90-31 должно придти СМС с кодом подтверждения
		.form__field.mt-4
			v-text-field(
				outlined
				hide-details
				label="Код")
		.form__btn.d-flex.align-center.justify-space-between.mt-4
			Button(@click="use") Вход
			span.ml-12 Изменить номер телефона

</template>

<script>
import Button from "@/components/Button/Button";
export default {
	name: "SignInApprove",
	components: {Button},
	methods: {
		use() {
			this.$emit('enter')
		}
	}
}
</script>

<style lang="scss" scoped>
	.form {
		max-width: 320px;
		&__title {
			font-family: 'Montserrat';
			font-weight: 600;
			font-size: 20px;
			line-height: 24px;
			color: #212121;
		}
		&__subtitle {
			font-family: 'Montserrat';
			font-size: 14px;
			line-height: 16px;
			letter-spacing: 0.15px;
			color: #757575;
		}
		&__btn {
			span {
				cursor: pointer;
				font-style: normal;
				font-weight: 400;
				font-size: 14px;
				line-height: 24px;
				text-decoration-line: underline;
				color: #424242;
			}
		}
	}
	::deep.v-text-field {
		height: 40px !important;
	}
</style>
