<template lang="pug">
	.form
		.form__title Для регистрации или входа достаточно Вашего номера телефона
		.form__field.mt-4
			v-text-field(
				outlined
				hide-details
				label="Номер телефона")
		.form__btn.mt-4
			Button(@click="use") Отправить код для входа

</template>

<script>
import Button from "@/components/Button/Button";
export default {
	name: "SignInApprove",
	components: {Button},
	methods: {
		use() {
			this.$emit('use')
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
}
</style>
